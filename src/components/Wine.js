import React, { Component } from 'react';
import { LikeButton, CommentButton, CommentList } from '.';

export class Wine extends Component {
  render() {
    console.log('>>>>>>>>>>>>', this.props.wineView);
    if (!this.props.wineView.id) {
      console.log('>>>>>>>>>>>>88888888', this.props.wineView);
      return null;
    }
    return (
      <div className="col s12 m12 l6 offset-l3 ">
        <h2 className="center-align">Wine details</h2>
        <div className="card horizontal">
          <div className="card-image">
            <img
              className="responsive-img wine-detail-image"
              alt="Wine bottle pic"
              src={`https://wines-api.herokuapp.com/api/wines/${this.props.wineView.id}/image`}
            />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h3>{this.props.wineView.name}</h3>
              <br />
              <p>
                <b>Appellation:</b> {this.props.wineView.appellation.name}
              </p>
              <p>
                <b>Region:</b> {this.props.wineView.appellation.region}
              </p>
              <p>
                <b>Color:</b> {this.props.wineView.type}
              </p>
              <p>
                <b>Grapes:</b> {this.props.wineView.grapes.join(', ')}
              </p>
              <CommentList wine={this.props.wineView} />
            </div>
            <div className="card-action">
              <LikeButton wine={this.props.wineView} />
              <CommentButton openCommentModal={this.props.openCommentModal} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
