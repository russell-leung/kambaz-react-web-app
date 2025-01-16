export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h3>
        <label htmlFor="wd-name">Assignment Name</label>
      </h3>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea
        id="wd-description"
        rows={8}
        cols={50}
        defaultValue={
          "The assignment is available online " +
          "Submit a link to the landing page of your Web application running on Netlify. " +
          "The landing page should include the following: " +
          "Your full name and section " +
          "Links to each of the lab assignments " +
          "Link to the Kanbas application " +
          "Links to all relevant source code repositories " +
          "The Kanbas application should include a link to navigate back to the landing page."
        }
      ></textarea>
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="assignments">Assignments</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade As</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="percentage">Percentage</option>
                <option value="complete-incomplete">Complete/Incomplete</option>
                <option value="letter">Letter</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="online">Online</option>
                <option value="in-person">In Person</option>
              </select>
              <br />
              <br />
              <span>Online Entry Options</span>
              <br />
              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input type="checkbox" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input type="checkbox" id="wd-media-recording" />
              <label htmlFor="wd-media-recording">Media Recording</label>
              <br />
              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <tr>
            <td align="right"></td>
            <td>
              <br />
              <label htmlFor="wd-assign-to">Assign To</label>
              <br />
              <input id="wd-assign-to" defaultValue="Everyone" />
              <br />
              <br />
              <label htmlFor="wd-due-date">Due</label>
              <br />
              <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
              <br />
              <br />
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label htmlFor="wd-available-from">Available From</label>
                      <br />
                      <input
                        id="wd-available-from"
                        type="date"
                        defaultValue="2024-05-06"
                      />
                    </td>
                    <td>
                      <label htmlFor="wd-available-until"> Until </label>
                      <br />
                      <input
                        id="wd-available-until"
                        type="date"
                        defaultValue="2024-05-20"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div>
          <button type="button">Cancel</button>
          <button type="button">Save</button>
        </div>
      </div>
    </div>
  );
}
