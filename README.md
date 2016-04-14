#Razzmatazz.js

[![Code Climate](https://codeclimate.com/github/ondenman/razzmatazz/badges/gpa.svg)](https://codeclimate.com/github/ondenman/razzmatazz)

Razzmatazz is a simple javascript module that applies gradients to groups of HTML elements.

![Applied to text](https://raw.githubusercontent.com/ondenman/razzmatazz/master/resources/text-example.png)

![Applied to a list](https://raw.githubusercontent.com/ondenman/razzmatazz/master/resources/list-example.png)


##Usage

Three functions are provided:
~~~
razzmatazz.background(); //applies colors to background style of child elements
razzmatazz.foreground(); //applies colors to color style of child elements
razzmatazz.border();     //applies colors to border-color style of child elements
~~~

###Example One

~~~
<head>
    <script src="razzmatazz.js"></script>
</head>
<body>
    <ul id="gradient-list">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
        <li>Five</li>
    </ul>

    <script>
        razzmatazz.background({
            container: "gradient-list",
            children: "li",
            startColor: "#ff00ff",
            endColor: "#00ffff" 
        })
    </script>
</body>
~~~

###Example Two

~~~
<head>
    <script src="razzmatazz.js"></script>
</head>
<body>
    <div id="gradient-wrapper">
        <h1>Heading 1</h1>
        <p class="gradient-child">One</p>
        <p class="gradient-child">Two</p>
        <h2>Heading 2</h2>
        <p class="gradient-child">Three</p>
        <p class="gradient-child">Four</p>
        <p class="gradient-child">Five</p>
    </div>

    <script>
        razzmatazz.foreground({
            container: "gradient-wrapper",
            children: "gradient-child",
            startColor: "#ff00ff",
            endColor: "#00ffff" 
        })
    </script>
</body>
~~~

###Options

~~~
({
    container: "gradient-wrapper",  // container element ID
    children: "gradient-child",     // child elements' class or tag name
    startColor: "#ff00ff",          // start color in six digit hex
    endColor: "#00ffff"             // end color in six digit hex
})
~~~