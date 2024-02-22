const express = require('express');
exports.userCrudOperation = (Model) => {
    return {
        createUser: body => Model.create(body),
        getUser: id => Model.findById(id),
        getAllUser: () => Model.find({}),
        updateUser: (id, body) => Model.findByIdAndUpdate(id, body, {new:true}),
        deleteUser: id => Model.findByIdAndDelete(id) 
    }
};
