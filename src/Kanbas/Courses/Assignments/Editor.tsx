export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
           <select>
                <option value="">ASSIGMENTS</option>
           </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
          <select>
                <option value="">Percentage</option>
           </select>
          </td>
        </tr>
        

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select>
                <option value="">Online</option>
            </select>
            <div>
                Online Entry  Options
                <div>
                    <input type="checkbox" name="check-genre" id="wd-text-entry"/>
                    <label htmlFor="wd-text-entry">Text Entry</label>
                </div>
                <div>
                    <input type="checkbox" name="check-genre" id="wd-website-url"/>
                    <label htmlFor="wd-website-url">Website URL</label>
                </div>
                <div>
                    <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
                    <label htmlFor="wd-media-recordings">Media Recordings</label>
                </div>
                <div>
                    <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
                    <label htmlFor="wd-student-annotation">Student Annotation</label>
                </div>
                <div>
                    <input type="checkbox" name="check-genre" id="wd-file-upload"/>
                    <label htmlFor="wd-file-upload">File Uploads</label>
                </div>
            </div>
          </td>
        </tr>


        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Assign</label>
          </td>
          <td>
            <div>
                <label >Assign to</label><br/>
                <input type="text"  value='EveryOne' id="wd-file-upload"/>
            </div>
           
            <div>
                <label >Due</label><br/>
                <input type="date"id="wd-due-date" value="2024-05-13"/><br/>
            </div>

            <div>
                <div >
                <label >Available from </label><br/>
                <input type="date" id="wd-available-from" value="2024-05-06"/>
                </div>
              
               <div>
               <label >Until </label><br/>
               <input type="date" id="wd-available-until" value="2024-05-06"/>
               </div>  
            </div>

          </td>
        </tr>

        <tr>
            <td></td>
          <td align="right"  colSpan={2}>
           <button>Cancel</button> <button>Save</button>
          </td>
         
        </tr>
        
      </table>
    </div>
);}