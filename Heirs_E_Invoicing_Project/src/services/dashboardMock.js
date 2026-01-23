import trendIcon from "../assets/icons/activity.svg"
import clientsIcon from "../assets/icons/clients.svg"
import earningsIcon from "../assets/icons/earnings.svg"
import ClientGraphIcon from "../assets/icons/client_graph.svg"

export const stats = [
 {
    title: "Spent this month",
    value: "$682.5",
   // iconLeft: spentIcon
  },
  {
    title: "New clients",
    value: "321",
    iconLeft: clientsIcon,
    iconRight: ClientGraphIcon,
    rightIconType: "clientsTrend"
  },
  {
    title: "Earnings",
    value: "$350.40",
    iconLeft: earningsIcon
  },
  {
    title: "Activity",
    value: "$540.50",
    iconRight: trendIcon,
    rightIconType: "activityTrend",
    highlight: true
  }
];


