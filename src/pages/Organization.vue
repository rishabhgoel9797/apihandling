<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="panel panel-info">
          <div class="panel-body organizationBody">
            <i class="fa fa-plus add" aria-hidden="true" data-toggle="modal" data-target="#organizationModal"></i>
            Add organization
          </div>
        </div>
      </div>
      <div class="col-md-4" v-for="organization in getAllOrganizations" :key="organization.organisationId">
        <div class="panel panel-info">
          <div class="panel-body organizationBody">
            <p @click="getProjects(organization.organisationId)">{{organization.organisationName}}</p>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#usersModal">Add User</button>
          </div>
        </div>
        <!-- Users Modal -->
    <div id="usersModal" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Add New Users</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label>Enter User Email</label>
                <input type="text" class="form-control" name="user_email" placeholder="Enter User Email"
                v-model="search">
                <!-- <autocomplete
                  :source="getOrgUsers"
                  ref="autocomplete"
                  placeholder="Search USERS"
                  input-class="form-control"
                  @selected="getOrgUsers.name"
                >
                </autocomplete> -->
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal"
            @click="addColab(organization.organisationId)">Add Collaborator</button>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
    <!-- Organization Modal -->
    <div id="organizationModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Create New Organization</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" name="organizationName" v-model="name">
              </div>
              <!-- <div class="form-group">
                <label>Description</label>
                <textarea type="text" class="form-control" rows="5" name="organizationDescription"></textarea>
              </div> -->
            </form>
          </div>
          <div class="modal-footer">
            <button @click="organization" type="button" class="btn btn-primary" data-dismiss="modal">Create</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/organization.js"></script>

<style scoped>
.container {
  margin-top: 50px;
}
.organizationBody {
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
p {
  cursor: pointer;
}
</style>
