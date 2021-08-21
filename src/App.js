import React from "react";
import { Typography, AppBar } from "@material-ui/core";
import Notifications from "./components/Notifications";
import Options from "./components/Options";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  return (
    <div>
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Video Chat
        </Typography>
      </AppBar>
      {/* Video Player */}
      <VideoPlayer />
      {/* Options > Notifications */}
      <Options>
        <Notifications />
      </Options>
    </div>
  );
};

export default App;
