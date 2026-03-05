import { useTime } from "./useTime";

function WorkoutTimer() {
  const time = useTime();

  // Will be be AM or PM
  const partOfDay = time.slice(-2);

  return <time>For your workout on {time}</time>;
}

export default WorkoutTimer;
