import React, { Component } from 'react';
import CheckOutSummary from '../../components/Order/CheckoutSummary/CheckOutSummary';
import { Route, Navigate } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';
// import * as actions from '../../store/actions/index';

class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () =>  {
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        let summary = <Navigate to="/" />
        if ( this.props.ings ) {
            const purchasedRedirect = this.props.purchased ? <Navigate to="/"/> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckOutSummary
                        ingredients={this.props.ings}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler} />
                    <Route
                        path={this.props.match.path + '/contact-data'}
                        component={ContactData} />
                </div>
            );
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
};

export default connect(mapStateToProps)(Checkout);