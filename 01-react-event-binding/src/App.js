import React from 'react';
import './App.css';
import Counter from './component/counter';
import CounterClass from './component/counterclass';
import ProductItem from './component/productitem';
import WishMessage from './component/wishcard';


class App extends React.Component {


    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <a href="/" className='navbar-brand'>React Examples</a>
                </nav>
                    <Counter/>
                    <CounterClass/>
                    <ProductItem/>
                    <WishMessage/>
              

            </div>
        );
    }

}
export default App;
