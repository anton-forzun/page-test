(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function s(c){let r=0;const n=o=>{r=o,c.innerHTML=`count is ${r}`};c.addEventListener("click",()=>n(r+1)),n(0)}document.addEventListener("DOMContentLoaded",function(){const c=document.querySelector(".slider"),r=document.querySelectorAll(".slide");let n=0;function o(){c.style.transform=`translateX(${-n*100}%)`}function e(){n=(n-1+r.length)%r.length,o()}document.getElementById("prevButton").addEventListener("click",e)});s(document.querySelector("#counter"));
