import React from 'react';
import '../../../themes/basic/object-component.scss';
import hljs from "highlight.js";

export class ObjectComponent extends React.PureComponent {

  componentDidMount () {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  }

  render () {
    return (<div className='object-component'>
      <div className={'paragraph'}>
        <div className={'h1'}>Object</div>
        <div className={'p1'}>
          Object is an entity having state and behavior (properties and method). Objects are considered to be instances
          of a particular reference type.
          In javascript, almost everything is an Object.
          <ul>
            <li>Document</li>
            <li>Window</li>
            <li>Math</li>
            <li>Date</li>
            <li>Array</li>
            <li>Function</li>
            <li>Object</li>
            <li>Sometimes, following primitive type behaves as an Object
              <ul>
                <li>String = Having it's own properties (e.g. <i>length</i>) and method (e.g. <i>toLowerCase</i>, <i>toUpperCase</i> etc.),
                  you can find more.</li>
                <li>Number = Having it's own properties (e.g. <i>MAX_VALUE</i>, <i>MIN_VALUE</i>) and method
                  (e.g. <i>toFixed</i>, <i>toLocaleString</i> etc.), you can find more.</li>
              </ul>
            </li>
          </ul>
          <div className={'note'}>
            <b>Note:</b>
            <div className={'info'}> Unassigned properties of an Object are undefined (and not null). </div>
          </div>
        </div>
        <div className={'h1'}>Object creation</div>
        <div className={'p1'}>
          There are three ways by which you can create an object
          <ol type="1">
            <li>Using Object literals</li>
            <li>Using a constructor function</li>
            <li>Using <i>Object.create</i> method</li>
          </ol>
          <div className={'h2'}>1. Using Object literals</div>
          <div className={'p1'}>
            An object literal is a pair of curly braces surrounding zero or more name-value or key-value pairs.
            Commas are used to separate the pairs. Objects are passed around by reference.
            <pre>
              <code>
                {"var empty_object = {}; \n// Empty object created using object literals, named 'empty_object'.\n\nvar object_1 = {}, object_2 = {}, object_3 = {}; \n// object_1, object_2 and object_3 each refer to a different empty Object\n\nvar object_1 = object_2 = object_3 = {}; \n// object_1, object_2 and object_3 all refers to the same empty object\n\nvar person = {\n\t'name': 'Avinash',\n\t'age': 23\n}\n//Object person created and assigned using Object literals"}
              </code>
            </pre>
            <div className={'note'}>
              <b>Note:</b>
              <div className={'info'}> Objects made from object literal expressions are instances of Object. </div>
            </div>
          </div>
          <div className={'h2'}>2. Using a constructor function</div>
          <div className={'p1'}>
            New objects are created by using the <i>new</i> operator followed by a constructor. A <i>constructor</i> is
            simply a function whose purpose is to create a new Object.<br/>
            <pre>
              <code>
                <div className={'block'}>
                {"/** constructor function */\nfunction Person () {\n  this.name = 'Person';\n  this.gender = 'unknown';\n\n  this.setName = function (name) {\n\tthis.name = name;\n  };\n\n  this.setGender = function (gender) {\n\tthis.gender = gender;\n  };\n\n  this.getName = function () {\n\treturn this.name;\n  };\n\n  this.getGender = function () {\n\treturn this.gender;\n  };\n}"}
                </div>
                <div className={'block'}>
                  {"/** object creation using new operator */\nvar student = new Person();\nstudent.getName(); // Output: Person\nstudent.getGender(); // Output: unknown\n\nvar faculty = new Person();\nfaculty.getName(); // Output: Person\nfaculty.getGender(); // Output: unknown\n\nstudent.setName('Avinash');\nfaculty.setName('Rakesh');\n\nstudent.getName(); // Output: Avinash\nfaculty.getName(); // Output: Rakesh"}
                </div>
                </code>
            </pre>
            Above code creates a new instance of the <i>Person</i> reference type and stores it in the variables <i>student </i>
            and <i>faculty</i>. The <i>constructor</i> being used is <i>Person()</i>, which creates a simple object with
            only the default properties and methods.
          </div>
          <div className={'h2'}>3. Using <i>Object.create</i> method</div>
          <div className={'p1'}>
            This method can be very useful, because it allows you to choose the <i>prototype</i> object for the object you want
            to create, without having to define a constructor function.<br/>
            <pre>
              <code>
                <div className={'block'}>
                   {"/*** Step 1 */\nvar dummyObj = {};\ndummyObj.toJSON = function () {\n  console.log(this);\n};\n\n/*** Step 2 */\nvar Person = Object.create(dummyObj);\nPerson.name = 'Avinash';\nPerson.gender = 'Male';\nPerson.info = function () {\n  console.log(this.name +' ('+this.gender+')');\n};\n\nconsole.log(Person.info());\n\n// toJSON() function inherited from parent 'dummyObj' object.\nconsole.log(Person.toJSON());"}
                </div>
                <div className={'block'}>
                  <span className={'img-1'}>{/**/}</span>
                  <span className={'img-2'}>{/**/}</span>
                </div>
                </code>
            </pre>
          </div>
        </div>
      </div>
    </div>);
  }
}

ObjectComponent.propTypes = {};