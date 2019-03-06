import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import ListBookmarks from "../Bookmarks/bookmarkList";
import ReadingStats from "../articles/ReadingStats";

export default () => (
  <Tabs>
    <TabList>
      <Tab>Bookmarks</Tab>
      <Tab>Statistics</Tab>
    </TabList>

    <TabPanel>
      <ListBookmarks />
    </TabPanel>
    <TabPanel>
      <ReadingStats />
    </TabPanel>
  </Tabs>
);
