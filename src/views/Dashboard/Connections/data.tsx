import { ReactElement } from "react";
import DotsIcon from "assets/svg/dots";

interface IData {
  id: number;
  connectionName: string;
  mobileNumber: number;
  Datecreated: string;
  actions: ReactElement;
}

const data: IData[] = [
  {
    id: 0,
    connectionName: "Aafreen",
    mobileNumber: 9008787430,
    Datecreated: "22-01-2021",
    actions: <DotsIcon />,
  },
  {
    id: 1,
    connectionName: "Bharat",
    mobileNumber: 9008787430,
    Datecreated: "22-01-2021",
    actions: <DotsIcon />,
  },
  {
    id: 2,
    connectionName: "Chandresh",
    mobileNumber: 9008787430,
    Datecreated: "22-01-2021",
    actions: <DotsIcon />,
  },
  {
    id: 3,
    connectionName: "Aafreen",
    mobileNumber: 9008787430,
    Datecreated: "22-01-2021",
    actions: <DotsIcon />,
  },
  {
    id: 4,
    connectionName: "Bharat",
    mobileNumber: 9008787430,
    Datecreated: "22-01-2021",
    actions: <DotsIcon />,
  },
  {
    id: 5,
    connectionName: "Chandresh",
    mobileNumber: 9008787430,
    Datecreated: "22-01-2021",
    actions: <DotsIcon />,
  },
  {
    id: 6,
    connectionName: "Aafreen",
    mobileNumber: 9008787430,
    Datecreated: "22-01-2021",
    actions: <DotsIcon />,
  },
  {
    id: 7,
    connectionName: "Bharat",
    mobileNumber: 9008787430,
    Datecreated: "22-01-2021",
    actions: <DotsIcon />,
  },
  {
    id: 8,
    connectionName: "Chandresh",
    mobileNumber: 9008787430,
    Datecreated: "22-01-2021",
    actions: <DotsIcon />,
  },
  {
    id: 9,
    connectionName: "Aafreen",
    mobileNumber: 9008787430,
    Datecreated: "22-01-2021",
    actions: <DotsIcon />,
  },
  {
    id: 10,
    connectionName: "Bharat",
    mobileNumber: 9008787430,
    Datecreated: "22-01-2021",
    actions: <DotsIcon />,
  },
];

const columns = [
  {
    title: "Connection name",
    dataIndex: "connectionName",
    key: "connectionName",
  },
  {
    title: "Mobile no.",
    dataIndex: "mobileNumber",
    key: "mobileNumber",
  },
  {
    title: "Date created",
    dataIndex: "dateCreated",
    key: "dateCreated",
  },
  {
    title: "Actions",
    dataIndex: "action",
    key: "action",
  },
];

export { data, columns };
