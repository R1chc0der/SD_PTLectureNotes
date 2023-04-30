/* 
   - Create a <p> tag that notes where you grew up. 
    - Use variables for city and state.
  - Create an unordered list with the last 3 places you have visited. (Target, Alaska, the Kitchen, etc.)
  - Export the component.
  - Import the component into App.jsx and mount it between the Header and Footer components.
*/

function AboutMe() {
  const city = "Bridgetown";
  const state = "stJames";

  let styles = {
    ul: {
      textAlign: "right",
      color: "green",
    },
    p: {
      fontSize: "20pt",
    },
  };

  return (
    <div>
      <p style={styles.p}>
        Grew up:{city}, {state} in the Caribbean
      </p>

      <ul style={styles.p}>
        <li>computer chair</li>
        <li>gym</li>
        <li>Bed</li>
      </ul>
    </div>
  );
}
//stye={{ textAlign: "left", color: "cyan" }}
export default AboutMe;
