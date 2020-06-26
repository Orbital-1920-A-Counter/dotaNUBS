import React, { Component } from 'react';

export default class getPlayer extends Component {
    render() {
        return (
            <div className="wrapper">
                <form>
                    <div className="form-group">
                        <center><label>Enter PlayerID</label></center>
                        <h1><center><input type="text" className="form-control" /></center></h1>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-success btn-block" />
                        Go
                    </div>
                </form>
            </div>
        )
    }
}