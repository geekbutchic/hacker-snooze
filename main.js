const body = document.querySelector("body");
const heading = document.createElement("div");
heading.className = "heading-parent";
const title = document.createElement("div");
heading.id = "heading-title";
title.innerHTML = "Hacker News 🗞";
const headerNew = document.createElement("a");
headerNew.className = "sub-titles";
headerNew.innerHTML = "New";
headerNew.href = "#";
const titlePast = document.createElement("a");
titlePast.className = "sub-titles";
titlePast.innerHTML = "Past";
titlePast.href = "#";
const titleComments = document.createElement("a");
titleComments.className =  "sub-titles";
titleComments.innerHTML = "Comments";
titleComments.href = "#";
const titleAsk = document.createElement("a");
titleAsk.className = "sub-titles";
titleAsk.innerHTML = "Ask";
titleAsk.href = "#";
const titleShow = document.createElement("a");
titleShow.className = "sub-titles";
titleShow.innerHTML = "Show";
titleShow.href = "#";
const titleJobs = document.createElement("a");
titleJobs.className = "sub-titles";
titleJobs.innerHTML = "Jobs";
titleJobs.href = "#";
const titleSubmit = document.createElement("a");
titleSubmit.className = "sub-titles";
titleSubmit.innerHTML = "Submit";
titleSubmit.href = "#";

body.appendChild(heading);
heading.appendChild(title);
heading.appendChild(headerNew);
heading.appendChild(titlePast);
heading.appendChild(titleComments);
heading.appendChild(titleAsk);
heading.appendChild(titleShow);
heading.appendChild(titleJobs);
heading.appendChild(titleSubmit);

const parent = document.querySelector("div");
parent.className = "parent"

body.appendChild(parent);

const URL = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"

fetch(URL)
    .then((rawRes) => {
        console.log("Response success");
        console.log("Response", rawRes);
        return rawRes.json();
    })
    .then((json) => {
        console.log("json object converted");
        console.log("Json", json);
        for (const element of json) {
            const URL1 = `https://hacker-news.firebaseio.com/v0/item/${element}.json?print=pretty`;
            fetch(URL1)
            .then((rawRes1) => {
                console.log("Response", rawRes1);
                return rawRes1.json();
            })
            .then((data) => {
                console.log("Json", data);
                const childTitle = document.createElement("a");
                const parent1 = document.createElement("div");
                const childPoints = document.createElement("div");
                const childAuthor = document.createElement("a");
                const childTime = document.createElement("a");
                const childComments = document.createElement("a");
                childTitle.className = "child-title";
                parent1.className = "sub-heading";
                childPoints.id = "points";
                childAuthor.id = "author";
                childTime.id = "time";
                childComments.id = "comments"
                parent.appendChild(childTitle);
                parent.appendChild(parent1);
                parent1.appendChild(childPoints);
                parent1.appendChild(childAuthor);
                parent1.appendChild(childTime);
                parent1.appendChild(childComments);
                childTitle.innerHTML = data.title;
                childTitle.href = data.url;
                childTitle.target = "-blank";
                childPoints.innerHTML = `by ${data.by}`;
                childAuthor.href = "#";
                childTime.innerHTML = new Date(data.time * 1000);
                childTime.href = "#";
                childTime.innerHTML = `${data.descendants} comments`;
                childComments.href = "#";
            })
            .catch((error) => console.log(error));
        }
    })