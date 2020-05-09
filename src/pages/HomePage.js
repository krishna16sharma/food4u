import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import Grid from '../components/Grid/Grid';
import BC from '../components/Products/BC';
import Canned from '../components/Products/Canned';
import Frozen from '../components/Products/Frozen';
import Dairy from '../components/Products/Dairy';
import Fruits from '../components/Products/Fruits';
import Snacks from '../components/Products/Snacks';
import Vegetable from '../components/Products/Vegetable';
import Grains from '../components/Products/Grains';

const HomePage = ({isSignedIn,handleAccount,user,product,setProduct}) =>{
    console.log(product);
    if(product === ''){
    return(
        <div>
            <Navigation isSignedIn={isSignedIn} handleAccount={handleAccount} user={user} setProduct={setProduct}/>
            <Logo/>
            <Grid product={product} setProduct={setProduct}/>
            <footer className="zone red-bg footer">Krishna Sharma S</footer>
        </div>
    )}
    else if (product === 'BC') {
        return(
            <div>
                <Navigation isSignedIn={isSignedIn} handleAccount={handleAccount} user={user} setProduct={setProduct}/>
                <BC isSignedIn={isSignedIn}/>
            </div>
        )
    }
    else if (product === 'Canned') {
        return(
            <div>
                <Navigation isSignedIn={isSignedIn} handleAccount={handleAccount} user={user} setProduct={setProduct}/>
                <Canned isSignedIn={isSignedIn}/>
            </div>
        )
    }
    else if (product === 'Frozen') {
        return(
            <div>
                <Navigation isSignedIn={isSignedIn} handleAccount={handleAccount} user={user} setProduct={setProduct}/>
                <Frozen isSignedIn={isSignedIn}/>
            </div>
        )
    }
    else if (product === 'Dairy') {
        return(
            <div>
                <Navigation isSignedIn={isSignedIn} handleAccount={handleAccount} user={user} setProduct={setProduct}/>
                <Dairy isSignedIn={isSignedIn}/>
            </div>
        )
    }
    else if (product === 'Snacks') {
        return(
            <div>
                <Navigation isSignedIn={isSignedIn} handleAccount={handleAccount} user={user} setProduct={setProduct}/>
                <Snacks isSignedIn={isSignedIn}/>
            </div>
        )
    }
    else if (product === 'Fruits') {
        return(
            <div>
                <Navigation isSignedIn={isSignedIn} handleAccount={handleAccount} user={user} setProduct={setProduct}/>
                <Fruits isSignedIn={isSignedIn}/>
            </div>
        )
    }
    else if (product === 'Vegetable') {
        return(
            <div>
                <Navigation isSignedIn={isSignedIn} handleAccount={handleAccount} user={user} setProduct={setProduct}/>
                <Vegetable isSignedIn={isSignedIn}/>
            </div>
        )
    }
    else if (product === 'Grains') {
        return(
            <div>
                <Navigation isSignedIn={isSignedIn} handleAccount={handleAccount} user={user} setProduct={setProduct}/>
                <Grains isSignedIn={isSignedIn}/>
            </div>
        )
    }
}
export default HomePage;
