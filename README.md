This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory please run:

### `npm i` 

to install all npm dependencies, then

### `npm run demo`

to see demo with multiple widgets or open http://localhost:3000/demo.html to view it in the browser.


**Example:**

`<iframe id="1" src="http://localhost:3000/stock?title=AAPL Stock Price&type=column&endpoint=http://localhost:3000/aapl-c.json"></iframe>`


### You can use  url query params for configuration your widget: 

`http://localhost:3000/stock` - stock chart

`http://localhost:3000/line` - line chart

**Available params:**

| key          |  description                           |
| -------------| --------------------------------------:|
| title        | chart top title                        |
| type         | line|column|bar works for stock chart  |
| color        | line color, works for stock chart      |
| endpoint     | url for mocked data                    |

#### For stock charts:

http://localhost:3000/aapl-c.json 


#### For line charts:

http://localhost:3000/temperature.json

http://localhost:3000/solar.json