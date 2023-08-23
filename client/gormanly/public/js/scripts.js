/**
 * gormanly - Your webapp
 * © 2023 Brian Gormanly
 *
 */

/*
 * Menu management for gormanly 
 */

window.addEventListener( "load", () => {
    
} );


let sideBarStatus = true;
function toggleSidebar() {
    if ( !sideBarStatus ) {
        document.getElementById( "gormanlySideBar" ).style.width = "250px";
        document.body.style.marginLeft = "250px";
    }
    else {
        document.getElementById( "gormanlySideBar" ).style.width = "85px";
        if( window.innerWidth > 992 ) {
            document.body.style.marginLeft = "85px";
        }
    }
    sideBarStatus = !sideBarStatus;
}

// add events for toggle sidebar
if( document.getElementById( "gormanlySideBar" ) ) {
    toggleSidebar();
    document.getElementById( "gormanlySideBar" ).addEventListener( "mouseover", toggleSidebar );
    document.getElementById( "gormanlySideBar" ).addEventListener( "mouseout", toggleSidebar );
}


