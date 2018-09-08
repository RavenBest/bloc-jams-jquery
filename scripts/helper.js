class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);
    const duration = player.getDuration();
    $('#time-control .total-time').text(duration);
  };

  prettyTime(timeInSeconds) {
    const min = Math.floor(timeInSeconds / 60);
    const sec = Math.floor(timeInSeconds - min * 60);
    return ${min}:${sec};
  };
};

const Helper = new helper();
