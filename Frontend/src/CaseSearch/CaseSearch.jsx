import React, {useEffect, useState, useRef, useCallback} from "react";
import FormattedContent from "../CommonFiles/FormattedContent.jsx";
import ProfileIconDropDown from "../CommonFiles/ProfileIconDropdown.jsx"
import "./CaseSearch.css";
import {assets} from "../components/CompLawChatBot/assets/assets.js"
import axios from "axios";
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { IconButton } from "@mui/material";

const CaseSearch = () => {
  const [showPIDropdown, setShowPIDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryResultArray, setSearchQueryResultArray] = useState([]);
  const [searchIndex, setSearchIndex] = useState("");
  const [summaryData, setSummaryData] = useState("");
  const [isSearchSummaryCalled, setIsSearchSummaryCalled] = useState(false);


  const navRef = useRef(null)

  const handleQuerySearchInput = (e) =>{
    setSearchQuery(e.target.value);
  };

  const handleGetQueryResultArray = async() => {
    try{
      const response = await axios.post('https://law-api.tecosys.ai/legal-solutions/case-search-query/', {search_query: searchQuery});
      if(response.status === 200){
        const extractedData = response.data;
        setSearchQueryResultArray(extractedData);
      }
    }
    catch{
      alert("Internal Servar Error");
    }
  };

  const handleGetSearchSummaryByIndex = async(e) => {
    setIsSearchSummaryCalled(true);
    setSearchIndex(e);
    setSummaryData("");
    try{
      const response = await axios.post('https://law-api.tecosys.ai/legal-solutions/case-search-summary/', {index: e});
      if(response.status === 200){
        const extractedData = response.data[0];
        setSummaryData(extractedData);
        console.log("summary data:",summaryData);
      }
    }
    catch (error) {
      console.error("Error fetching case summary:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current && !navRef.current.contains(event.target) && !event.target.matches(".case-search-nav-img")) {
        if (showPIDropdown) {
          setShowPIDropdown(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPIDropdown]);

  const toggleDropdown = () => {
    setShowPIDropdown(!showPIDropdown);
  };


  return (
    <div className="case-search-main-container">
      <div className="case-search-nav">
        <img
          src={assets.user_icon}
          alt="profile-img"
          onClick={toggleDropdown}
          className="case-search-nav-img"
        />
      </div>
      <div ref={navRef}>
        <ProfileIconDropDown showProfileIconDropdown={showPIDropdown} /> 
      </div>
      <div className="case-search-secondary-container">
        <p className="case-search-heading1">Case Search</p>
        {!isSearchSummaryCalled && (
          <p className="case-search-heading2">Get Details In A Blink!*</p>
        )}
        {!isSearchSummaryCalled && (
          <div className="case-search-med-items" style={{position: 'relative', width: '100%'}}>
            <input type="text" className="case-search-input" placeholder="Enter Case Name" onChange={handleQuerySearchInput}/>
            <IconButton onClick={handleGetQueryResultArray} sx={{width:"35px", height:"35px"}} className="spcl-input">
              <SendOutlinedIcon />
            </IconButton>
          </div>
        )}
        {!isSearchSummaryCalled && (
          <div className="case-search-small-card">
          {Array.isArray(searchQueryResultArray) && searchQueryResultArray.map((item, index)=>(
            <div className="smallCard" key={index} onClick={()=>handleGetSearchSummaryByIndex(item.index)}>
              <p style={{fontSize: "13px",minWidth: "200px", whiteSpace: "normal", wordWrap: "break-word", overflow: "hidden", backgroundColor: "#c4c7c5", borderRadius: "4px", padding:"3px 0"}}>{item.case_title}</p>
              <p style={{fontSize: "13px", padding:"3px 0"}}>Case No.- {item.case_no}</p>
              <span className="onHoverSpan" onClick={() => window.open(item.pdf_link, '_blank')} style={{display:"flex", flexDirection: "row", fontSize: "13px", alignItems: "center", gap: "15px", width: "100%"}}><AttachmentOutlinedIcon /> Read the Document</span>
            </div>
          ))}
          </div>
        )}
        {isSearchSummaryCalled && (
          <>
          <div className="generated-summary-container">
            <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "#f0f4f9", padding: "15px", borderRadius: "10px"}}>
              <div style={{display: "flex", flexDirection: "row", gap: "30px"}}><span>Case Title:</span><span>{summaryData["Case Title"]}</span></div>
              <div style={{display: "flex", flexDirection: "row", gap: "30px"}}><span>Case No.:</span><span>{summaryData["Case No"]}</span></div>
              <div style={{display: "flex", flexDirection: "row", gap: "30px"}}><span>Judges:</span><span>{summaryData["Judges"]}</span></div>
              <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <div style={{display: "flex", flexDirection: "row", gap: "30px"}}><span>Judges:</span><span>{summaryData["Decision Date"]}</span></div>
                <div style={{display: "flex", flexDirection: "row", gap: "30px"}}><span>Judges:</span><span>{summaryData["Disposal Nature"]}</span></div>
              </div>
              <FormattedContent text={summaryData["Summary"]}/>
            </div>
          </div>
          <button>Search Another Case</button>
          </>
        )}
      </div>
    </div>
  );
};

export default CaseSearch;
