(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
// Created the h1 title.
const h1El = document.createElement("h1");
h1El.setAttribute("id", "main-title")
h1El.textContent = "My Movie List";

//I gave the main div an ID and created it storing in the variable mainContainerDiv.
const mainContainerDiv = document.querySelector("#large-container");


//I created the tag elements for my form.
const artEl = document.createElement("article");

//Created a section for my form.
const sectEl = document.createElement("section");
sectEl.setAttribute("id", "section1");


//Created my input fields The first is for the Movie Title
const movieTitleinput = document.createElement("input");
movieTitleinput.setAttribute("id", "movieTitleInput");
movieTitleinput.type = "text";
movieTitleinput.placeholder = "Movie Title"

//Input Field for Genre
const genreInput = document.createElement("input");
genreInput.setAttribute("id", "genreInput");
genreInput.type = "text";
genreInput.placeholder = "Genre";

// Input Field for Dirctor
const directorInput = document.createElement("input");
directorInput.setAttribute("id", "directorInput");
directorInput.type = "text";
directorInput.placeholder = "Director";

const movieInputs = [{
        type: "text",
        id: "movieTitleInput",
        placeholder: ""
    }, {
        type: "text",
        id: "genreInput",
        placeholder: ""
    },
    {
        type: "text",
        id: "directorInput",
        placeholder: ""

    }
]
},{}]},{},[1,2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzL2RiTWV0aG9kcy5qcyIsInNjcmlwdHMvbW92aWVIb21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiIiwiLy8gQ3JlYXRlZCB0aGUgaDEgdGl0bGUuXG5jb25zdCBoMUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuaDFFbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4tdGl0bGVcIilcbmgxRWwudGV4dENvbnRlbnQgPSBcIk15IE1vdmllIExpc3RcIjtcblxuLy9JIGdhdmUgdGhlIG1haW4gZGl2IGFuIElEIGFuZCBjcmVhdGVkIGl0IHN0b3JpbmcgaW4gdGhlIHZhcmlhYmxlIG1haW5Db250YWluZXJEaXYuXG5jb25zdCBtYWluQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsYXJnZS1jb250YWluZXJcIik7XG5cblxuLy9JIGNyZWF0ZWQgdGhlIHRhZyBlbGVtZW50cyBmb3IgbXkgZm9ybS5cbmNvbnN0IGFydEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG5cbi8vQ3JlYXRlZCBhIHNlY3Rpb24gZm9yIG15IGZvcm0uXG5jb25zdCBzZWN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbnNlY3RFbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlY3Rpb24xXCIpO1xuXG5cbi8vQ3JlYXRlZCBteSBpbnB1dCBmaWVsZHMgVGhlIGZpcnN0IGlzIGZvciB0aGUgTW92aWUgVGl0bGVcbmNvbnN0IG1vdmllVGl0bGVpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbm1vdmllVGl0bGVpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vdmllVGl0bGVJbnB1dFwiKTtcbm1vdmllVGl0bGVpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG5tb3ZpZVRpdGxlaW5wdXQucGxhY2Vob2xkZXIgPSBcIk1vdmllIFRpdGxlXCJcblxuLy9JbnB1dCBGaWVsZCBmb3IgR2VucmVcbmNvbnN0IGdlbnJlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5nZW5yZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZ2VucmVJbnB1dFwiKTtcbmdlbnJlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuZ2VucmVJbnB1dC5wbGFjZWhvbGRlciA9IFwiR2VucmVcIjtcblxuLy8gSW5wdXQgRmllbGQgZm9yIERpcmN0b3JcbmNvbnN0IGRpcmVjdG9ySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5kaXJlY3RvcklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGlyZWN0b3JJbnB1dFwiKTtcbmRpcmVjdG9ySW5wdXQudHlwZSA9IFwidGV4dFwiO1xuZGlyZWN0b3JJbnB1dC5wbGFjZWhvbGRlciA9IFwiRGlyZWN0b3JcIjtcblxuY29uc3QgbW92aWVJbnB1dHMgPSBbe1xuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgaWQ6IFwibW92aWVUaXRsZUlucHV0XCIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiXG4gICAgfSwge1xuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgaWQ6IFwiZ2VucmVJbnB1dFwiLFxuICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgaWQ6IFwiZGlyZWN0b3JJbnB1dFwiLFxuICAgICAgICBwbGFjZWhvbGRlcjogXCJcIlxuXG4gICAgfVxuXSJdfQ==
