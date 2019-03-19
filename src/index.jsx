import './style.scss';
import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

// import store from "./store.js";
// import { addToCart,updateCart,deleteCart } from "./actions/cart-actions";

import { ThemeContext, themes } from './theme-context.jsx';
import ThemeButton from './themed-button.jsx';

// console.log("initial State: ", store.getState());
// console.log("\n");

// var unsubsrible = store.subscribe( () => {
// 	console.log(store.getState());
// 	console.log("\n");
// } );

// store.dispatch(addToCart("Coffee 500gm", 32, 432));
// store.dispatch(addToCart("Flour 10", 32, 80));
// store.dispatch(addToCart("Juice 12gm", 3, 84));
// store.dispatch(updateCart("Juice 12gm", 111, 44444));
// store.dispatch(deleteCart("Flour 10"));

// unsubsrible();

// const Index = () => {
// 	return <div>Hello React!</div>;
// };

// class CustomTextInput extends React.Component {
//   constructor(props) {
//     super(props);
//     // create a ref to store the textInput DOM element
//     this.textInput = React.createRef();
//     this.focusTextInput = this.focusTextInput.bind(this);
//   }

//   focusTextInput() {
//     // Explicitly focus the text input using the raw DOM API
//     // Note: we're accessing "current" to get the DOM node
//     console.log(this.textInput.current);
//     this.textInput.current.focus();
//   }

//   render() {
//     // tell React that we want to associate the <input> ref
//     // with the `textInput` that we created in the constructor
//     return (
//       <div>
//         <input
//           type="text"
//           ref={this.textInput} />
//         <input
//           type="button"
//           value="Focus the text input"
//           onClick={this.focusTextInput}
//         />
//       </div>
//     );
//   }
// }

function Toolbar(props) {
  return <ThemeButton onClick={props.changeTheme}>Change Theme</ThemeButton>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <section>
          <ThemeButton />
        </section>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('index'));
