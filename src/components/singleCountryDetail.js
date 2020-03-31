import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../reduxComponents/action';
import { Link } from 'react-router-dom';
import DetailPage from './detailPage';
import "../styles/style.scss";

class SingleCountry extends Component {

    componentDidMount() {
        const name = this.props.match.params.country_id
        this.getSingleData(name)
    }

    getSingleData = (name) => {
        const filterData = this.props.allData.filter(data => data.name === name);
        this.props.getData(filterData)
    }

    changeCountry = (name) => {
        const filterData = this.props.allData.filter(data => data.alpha3Code === name);
        this.props.getData(filterData)
    }

    render() {
        return (
            <div style={{ margin: "0px 50px" }}>
                <Link to="/">
                    <button
                        className="back-button"
                    >&#x2190;  Back</button></Link>
                <div>
                    {this.props.data.map(data =>
                        <DetailPage
                            data={data}
                            changeCountry={this.changeCountry} />
                    )}
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        allData: state.countriesData,
        data: state.singleCountry,
    };
};

const mapDispatchToProps = {
    getData,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCountry);
