-->DIFFETRENCE BTWN TextContent, InnerText , InnerHTML 

para = documnet.getElementById('text)    
*para.textContent : Lorem ipsum, dolor sit amet consectetur hidden text elit.' {returns jo bhi screen pe dikh rha hai wo + all hidden text content}
*para.innerText   : 'Lorem ipsum, dolor sit amet consectetur elit.'  {returns jo bhi screen pe dikh rha hai wo}
*para.innerHtml   : 'Lorem ipsum, dolor sit amet consectetur <span style="display: none;">hidden text</span> elit.' {returns pura html}

-->querySelectorAll :  gives a NodeList(not Array) ^forEach lag jayega
 -->getElementByClassName : gives a HTMLCollection ^convert to array using Array.from(HTMLCollection)