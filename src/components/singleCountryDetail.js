import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData, getDataByCode } from '../reduxComponents/action';
import { Link } from 'react-router-dom';
import DetailPage from './detailPage';
import "../styles/style.scss";
import { ThemeContext } from '../context/themeContext';

class SingleCountry extends Component {

    componentDidMount() {
        const name = this.props.match.params.country_id
        this.props.getData(name)
    }

    changeCountry = (name) => {
        const filterData = this.props.allData.filter(data => data.alpha3Code === name);
        this.props.getDataByCode(filterData)
    }

    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
                return (
                    <div style={{ padding: "0px 50px", backgroundColor: theme.bg }}>
                        <Link to="/">
                            <button className="back-button"
                                style={{ backgroundColor: theme.ui, color: theme.textColor }}
                            >&#x2190;  Back</button></Link>
                        <div>
                            {this.props.data.map(data =>
                                <DetailPage
                                    data={data}
                                    changeCountry={this.changeCountry} />
                            )}
                        </div>
                    </div >
                )
            }}
            </ThemeContext.Consumer>
        );
    }
}

const mapStateToProps = state => {
    return {
        allData: state.countriesData,
        data: state.singleCountry,
    };
};

const mapDispatchToProps = {
    getData,
    getDataByCode
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCountry);
