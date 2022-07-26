//Tabs
(() => {
  const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
  const tabsItems = document.querySelectorAll(".tabs__item");
  
  tabsBtn.forEach(onTabClick);
  
  function onTabClick(item) {
    item.addEventListener('click', () => {
      const currentBtn = item;
      const tabId = currentBtn.getAttribute("data-tab");
      const currentTab = document.querySelector(tabId);
      
      if(!currentBtn.classList.contains('active')) {
        tabsBtn.forEach(item => item.classList.remove('active'));
        tabsItems.forEach(item => item.classList.remove('active'));
        
        currentBtn.classList.add('active');
        currentTab.classList.add('active');
      }
    })    
  }
  
  //Иметируем нажатие стартового tab, чтобы в HTML не писать active в ручную
  document.querySelector('.tabs__nav-btn:nth-child(2)').click();
})();