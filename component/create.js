import React from "react";
import CreateForm from "./CreateForm";
export class Create extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      redirect: false
    };
  }
  render() {
    return (
      <section>
        <div class="form-group">
          <div class="row">
            <div class="col-md-5">
              <CreateForm />
            </div>
            <div class="col-md-7">fsafasfas</div>
          </div>
        </div>
      </section>
    );
  }
}
