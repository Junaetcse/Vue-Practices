Vue.component("tabs",{
    template:`
    <h2>Dynamic Tabs</h2>
    <ul class="nav nav-tabs">
        <li><a data-toggle="tab" href="">Menu 1</a></li>
        <li><a data-toggle="tab" href="">Menu 2</a></li>
        <li><a data-toggle="tab" href="">Menu 3</a></li>
    </ul>

    
        <div id="menu1" class="tab-pane fade">
        <h3>Menu 1</h3>
        </div>
        <div id="menu2" class="tab-pane fade">
        <h3>Menu 2</h3>
        </div>
        <div id="menu3" class="tab-pane fade">
        <h3>Menu 3</h3>
        </div>
  
    
    `
});