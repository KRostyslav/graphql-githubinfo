import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

const queryQL = gql`
  query {
    viewer {
      name
      url
      following (last: 20){
          nodes {
            name
            url
            bio
          }
      }
     }
  }
`;

@Component({
  selector: 'app-follow-list',
  templateUrl: './follow-list.component.html',
  styleUrls: [ './follow-list.component.css' ]
})

export class FollowListComponent implements OnInit {

  public following;

  constructor( private apollo: Apollo ) {
  }

  ngOnInit() {

    this.apollo.watchQuery<any>({
      query: queryQL
    })
      .valueChanges
      .subscribe(( {data} ) => {
        this.following = data.viewer.following.nodes;
        console.log(this.following);
      });
  }

}
