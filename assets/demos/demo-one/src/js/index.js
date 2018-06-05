
/****************************************
 * Materialize components initialization
******************************************/

document.addEventListener('DOMContentLoaded', function() {
    
    //materialize dropdown initialization
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
    
    //materialize tabs initialization
    var el = document.querySelectorAll(".tabs");
    var instance = M.Tabs.init(el);

});


/*********************************************************************
 * Animations when user toggles between forms in desktop sized devices
**********************************************************************/


let overlayOne = document.getElementsByClassName("ov--1");
let overlayTwo = document.getElementsByClassName("ov--2");

let contentOne = document.getElementsByClassName("fc--1");
let contentTwo = document.getElementsByClassName("fc--2");
let contentThree = document.getElementsByClassName("inner--content");

let backgroundOne = document.getElementsByClassName("bg--1");
let backgroundTwo = document.getElementsByClassName("bg--2");
let backgroundThree = document.getElementsByClassName("bg--3");

let adminMainContainer = document.getElementsByClassName("admin--container");
let formsMainContainer = document.getElementsByClassName("forms--container");
let overlaysMainContainer = document.getElementsByClassName("overlays--container");
let backgroundsMainContainer = document.getElementsByClassName("backgrounds--container");


function toggleForm(that){

    let currentForm = that.getAttribute("data-current-form");
    let toggleTo = that.getAttribute("data-toggle");
    
    
    if(currentForm == "student" && toggleTo == "teacher"){

        //overlay moving effect
        overlayTwo[0].setAttribute("style","animation:OverlayHide 500ms ease 0s 1 forwards");
        overlayOne[0].setAttribute("style","animation:overlayShow 500ms ease 0s 1 forwards");


        //content fades effect
        contentTwo[0].setAttribute("style","animation:FadeOut 400ms ease 0s 1 forwards");
        contentOne[0].setAttribute("style","animation:FadeIn 400ms ease 0s 1 forwards");

        //document title
        documentTitle("second");

    }

    else if(currentForm === "teacher" && toggleTo === "student"){

        //overlay moving effect
        overlayOne[0].setAttribute("style","animation:OverlayHide 500ms ease 0s 1 forwards");
        overlayTwo[0].setAttribute("style","animation:overlayShow 500ms ease 0s 1 forwards");


        //content fades effect
        contentOne[0].setAttribute("style","animation:FadeOut 400ms ease 0s 1 forwards");
        contentTwo[0].setAttribute("style","animation:FadeIn 400ms ease 0s 1 forwards");

        //document title
        documentTitle("first");

    }
    
    //displaying the admin form

    else if(currentForm === "student" && toggleTo === "admin"){
        displayAdminForm("student");

        //document title
        documentTitle("third");
    }

    else if(currentForm === "teacher" && toggleTo === "admin"){
        displayAdminForm("teacher");
        
        //document title
        documentTitle("third");
    }

    //removing the admin from and displaying the user selected form

    else if(currentForm === "admin" && toggleTo === "student"){
        hideAdminForm("student");
        
        //document title
        documentTitle("first");
    }

    else if(currentForm === "admin" && toggleTo === "teacher"){
        hideAdminForm("teacher");

        //document title
        documentTitle("second");
    }

}

function displayAdminForm(whichElement){

    //sliding out each and every elements
    backgroundOne[0].setAttribute("style","animation:FirstBgOutside 500ms ease 0s 1 forwards");
    backgroundTwo[0].setAttribute("style","animation:SecondBgOutSide 500ms ease 0s 1 forwards");

    if(whichElement === "student"){

        overlayTwo[0].setAttribute("style","animation:StudentOverlayOutside 500ms ease 0s 1 forwards");

        //adding fade effect to the content
        contentTwo[0].setAttribute("style","animation:FadeOut 200ms ease 0s 1 forwards");
    }
    
    else if(whichElement === "teacher"){

        overlayOne[0].setAttribute("style","animation:TeacherOverlayOutsite 500ms ease 0s 1 forwards");
        
        //adding fade effect to the content
        contentOne[0].setAttribute("style","animation:FadeOut 200ms ease 0s 1 forwards");
    }

    //deleting first and second form elements and adding third element to document

    setTimeout(function(){

        //addition
        adminMainContainer[0].classList.remove("element--delete");

        //deletion
        formsMainContainer[0].classList.add("element--delete");
        overlaysMainContainer[0].classList.add("element--delete");
        backgroundsMainContainer[0].classList.add("element--delete");
    },350);


    //now admin animation overlay effects
    backgroundThree[0].setAttribute("style","animation:AdminOverlayShow 400ms ease 0s 1 forwards");
    contentThree[0].setAttribute("style","animation:FadeIn 400ms ease 0s 1 forwards");

}

function hideAdminForm(whichElement){

        contentThree[0].setAttribute("style","animation:FadeOut 300ms ease 0s 1 forwards");
        backgroundThree[0].setAttribute("style","animation:AdminOverlayHide 500ms ease 0s 1 forwards");

        //deleting the admin form and adding all other elements

        setTimeout(function(){
        
        //deletion 
        adminMainContainer[0].classList.add("element--delete");

        //addition
        formsMainContainer[0].classList.remove("element--delete");
        overlaysMainContainer[0].classList.remove("element--delete");
        backgroundsMainContainer[0].classList.remove("element--delete");

        },500);


        //slidig in elements
        backgroundOne[0].setAttribute("style","animation:FirstBgInside 500ms ease 0s 1 forwards");
        backgroundTwo[0].setAttribute("style","animation:SecondBgInside 500ms ease 0s 1 forwards");
        
        if(whichElement === "student"){
            overlayOne[0].setAttribute("style","animation:FadeOut 100ms ease 0s 1 forwards"); //this one
            overlayTwo[0].setAttribute("style","animation:StudentOverlayInside 500ms ease 0s 1 forwards");
            contentTwo[0].setAttribute("style","animation:FadeIn 500ms ease 0s 1 forwards");
            contentOne[0].setAttribute("style","opacity:0;visibility:hidden;");
        }
        
        else if(whichElement === "teacher"){
            overlayTwo[0].setAttribute("style","width:0;"); //this one
            overlayOne[0].setAttribute("style","animation:TeacherOverlayInside 500ms ease 0s 1 forwards");
            contentOne[0].setAttribute("style","animation:FadeIn 500ms ease 0s 1 forwards");
            contentTwo[0].setAttribute("style","opacity:0;visibility:hidden");
        }


}


/********************************************************** 
 * Changing document title when user toggles between forms
***********************************************************/


function documentTitle(whichOne){

    let globalTitle = "Assignment Management System";
    
    switch(whichOne){
        case "first":
            document.title = "Student Login - "+globalTitle;
            break;
        case "second":
            document.title = "Teacher Login - "+globalTitle;
            break;
        case "third":
            document.title = "Admin Login - "+globalTitle;
            break;
    }

}


/*************************************************************************************
 * Changing Background Image when user toggles between forms in mobile sized devices 
**************************************************************************************/


function background(that){
    if(that.getAttribute("data-tab") === "student"){
        document.body.setAttribute("class","mob-st-bg");
    }
    else if(that.getAttribute("data-tab") === "teacher"){
        document.body.setAttribute("class","mob-tc-bg");
    }
    else if(that.getAttribute("data-tab") === "admin"){
        document.body.setAttribute("class","mob-ad-bg");
    }
}

/* ************************
    Tabs classes toggles
****************************/

let tabsContainer = document.getElementsByClassName("tabs");
let tabsItems = tabsContainer[0].getElementsByTagName("li");

function tabsClassesToggle(){
    
    let i;

    if(window.innerWidth <= 307){

        for(i=0 ; i<tabsItems.length ; i++){

            if(tabsItems[i].classList.contains("s4")){
                tabsItems[i].setAttribute("class","tab col s12");
            }

        }

    }

    else{
        for(i=0 ; i<tabsItems.length ; i++){
            if(tabsItems[i].classList.contains("s12")){
                tabsItems[i].setAttribute("class","tab col s4");
            }
        }
    }

}

window.addEventListener("load",tabsClassesToggle);
window.addEventListener("resize",tabsClassesToggle);
