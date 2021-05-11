import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-lottery-info',
  templateUrl: './lottery-info.component.html',
  styleUrls: ['./lottery-info.component.css']
})
export class LotteryInfoComponent implements OnInit {
  states  = {
    1: "Alabama",
    2: "Alaska",
    4: "Arizona",
    5: "Arkansas",
    6: "California",
    8: "Colorado",
    9: "Connecticut",
    10: "Delaware",
    11: "District of Columbia",
    12: "Florida",
    13: "Geogia",
    15: "Hawaii",
    16: "Idaho",
    17: "Illinois",
    18: "Indiana",
    19: "Iowa",
    20: "Kansas",
    21: "Kentucky",
    22: "Louisiana",
    23: "Maine",
    24: "Maryland",
    25: "Massachusetts",
    26: "Michigan",
    27: "Minnesota",
    28: "Mississippi",
    29: "Missouri",
    30: "Montana",
    31: "Nebraska",
    32: "Nevada",
    33: "New Hampshire",
    34: "New Jersey",
    35: "New Mexico",
    36: "New York",
    37: "North Carolina",
    38: "North Dakota",
    39: "Ohio",
    40: "Oklahoma",
    41: "Oregon",
    42: "Pennsylvania",
    44: "Rhode Island",
    45: "South Carolina",
    46: "South Dakota",
    47: "Tennessee",
    48: "Texas",
    49: "Utah",
    50: "Vermont",
    51: "Virginia",
    53: "Washington",
    54: "West Virginia",
    55: "Wisconsin",
    56: "Wyoming"
  }
  lotteries: any;
  lotteryType: string = "Lottery Income ($1,000)"
  types = ["Lottery Income ($1,000)", "Lottery Prizes ($1,000)", "Lottery Administration ($1,000)", "Lottery Proceeds Available ($1,000)"]

  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {
  }

  callCensusLottery(value: any) {
    let apiStr = "https://api.census.gov/data/timeseries/govs?get=SVY_COMP,SVY_COMP_LABEL,GEO_ID,YEAR,AGG_DESC,AGG_DESC_LABEL,GOVTYPE,AMOUNT_FORMATTED&for=state:" + value + "&SVY_COMP=02&GOVTYPE=*&AGG_DESC=SF0058&AGG_DESC=SF0059&AGG_DESC=SF0060&AGG_DESC=SF0061"
    this.http.get(apiStr)
    .subscribe((response) => {
      console.log(response)
      let years = ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"]
      this.lotteries = response
      }
    )
  }
}
