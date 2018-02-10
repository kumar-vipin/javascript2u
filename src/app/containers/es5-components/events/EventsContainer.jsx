import React from 'react';
import '../../../themes/basic/events-container.scss';
import hljs from "highlight.js";

export class EventsContainer extends React.Component {

  componentDidMount () {

      ['pre', 'code'].forEach(function (block, i) {
        hljs.initHighlightingOnLoad(block);
      });


  }

  render () {
      return (<div className='events-container'>
        <div className={'paragraph'}>
          <div className={'h1'}>Event Order</div>
          <div className={'p1'}>
            Event order describes the order in which events are received on the page.<br/>
            When you click on an element (e.g. Button, Div, Span etc), you are clicking
            not just on that element but also on its parent element and on the page as a whole.
          </div>
          <div className={'data-image dom-structure'}>{/**/}</div>
          <div className={'p1'}>
            Not surprisingly, the Internet Explorer and Netscape development teams came up with an
            exactly opposite concept of event order.
            <ul>
              <li>Netscape said that the most specific node should receive the event last.
                Considering above element diagram, the event on <b>Element-1</b> takes place first. This is called event capturing.</li>
              <li>
                Microsoft said that the most specific node should receive the event first. that's why, the event on <b>Element-3</b> takes place first
                (the deepest possible point in the document tree, in example deepest point in element tree is <b>Element-3</b>). This is called event bubbling.
              </li>
              <li>
                Event bubbling and capturing are two ways of propagating events which occur in an element that is nested within another element.
              </li>
            </ul>
          </div>
          <div>
            <span className={'h2'}>Example:</span>
            <pre>
              <code className="html">
              {"<html lang='en'>\n<head>\n    <meta charset='UTF-8'>\n    <title>Event Order</title>\n    <style>\n\t#element-1 {\n\t  width: 200px;\n\t  border: 1px solid #333;\n\t  padding: 10px 20px 20px 20px;\n\t  margin: 3px;\n\t}\n\t#element-2 {\n\t  border: 1px solid red;\n\t  padding: 10px 20px 20px 20px;\n\t  margin: 3px;\n\t}\n\t#element-3 {\n\t  border: 1px solid darkgreen;\n\t  padding: 20px;\n\t  margin: 3px;\n\t}\n    </style>\n    <script type='text/javascript'>\n      window.onload = function () {\n      var element_1 = document.getElementById('element-1');\n      var element_2 = document.getElementById('element-2');\n      var element_3 = document.getElementById('element-3');\n      /**\n\tSyntax: \n\ttarget.addEventListener(type, listener[, useCapture]);\n\n\tNote: \n\tIf last argument (i.e useCapture) is true the event handler is set for the capturing phase, \n\tif it is false the event handler is set for the bubbling phase.\n      */\n      element_1.addEventListener('click', handleClickEventOnElement_1, false);\n      element_2.addEventListener('click', handleClickEventOnElement_2, false);\n      element_3.addEventListener('click', handleClickEventOnElement_3, false);\n    };\n\n      function handleClickEventOnElement_1 () {\n      alert('Element-1 Clicked');\n    }\n\n      function handleClickEventOnElement_2 () {\n      alert('Element-2 Clicked');\n    }\n\n      function handleClickEventOnElement_3 () {\n      alert('Element-3 Clicked');\n    }\n    </script>\n</head>\n<body>\n    <div id='element-1'>\n        Element-1\n        <div id='element-2'>\n            Element-2\n            <div id='element-3'>\n                Element-3\n            </div>\n        </div>\n    </div>\n</body>\n</html>"}
              </code>
              </pre>
          </div>
        </div>
      </div>);
  }
}

EventsContainer.propTypes = {

};