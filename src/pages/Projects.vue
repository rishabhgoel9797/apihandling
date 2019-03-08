<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="panel panel-info">
          <div class="panel-body projectBody">
            <i class="fa fa-plus add" aria-hidden="true" data-toggle="modal" data-target="#projectModal"></i>
            Add project
          </div>
        </div>
      </div>
      <div class="col-md-4" v-for="project in getAllProjects" :key="project.projectId">
        <div class="panel panel-info">
          <div class="panel-body projectBody">
            {{project.projectName}}
          </div>
        </div>
      </div>
    </div>
    <!-- Project Modal -->
    <div id="projectModal" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Create New Project</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" name="projectName" placeholder="Enter Project Name"
                v-model="name">
              </div>
              <div class="form-group">
                <label>Description</label>
                <textarea type="text" class="form-control" rows="5" name="projectDescription" placeholder="Enter Description"
                v-model="description"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal"
            @click="createProject">Create</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/projects.js"></script>

<style scoped>
.container {
  margin-top: 50px;
}
.projectBody {
  padding-top: 20%;
  border: 1px solid #ccc;
  border-radius: 8px;
  height: 200px;
  text-align: center;
  font-size: 15px;
  color: #039be5;
}
.add {
  color: #039be5;
  font-size: 40px;
  display: block;
  cursor: pointer;
}
</style>
