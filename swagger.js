const annotation={
     "openapi": "3.0.0",
     "info": {
          "title": "WELCOME TO SNOF APPLICATION",
          "version": "1.0.0",
          "description": "An API that creates a User CRUD operation, Authenticate him or her then give him Authorization on Snof CRUD operation "
     },
     "paths": {
          "/v1/api/register": {
               "post": {
                    "tags": [
                         "Users"
                    ],
                    "summary": "Create a new user",
                    "description": "Create a new user with the given email and password.",
                    "produces": [
                         "application/json"
                    ],
                    "requestBody": {
                         "description": "User object that needs to be added to the system",
                         "required": true,
                         "content": {
                              "application/json": {
                                   "schema": {
                                        "$ref": "#/components/schemas/UserInput"
                                   }
                              }
                         }
                    },
                    "responses": {
                         "201": {
                              "description": "User created successfully",
                              "content": {
                                   "application/json": {
                                        "schema": {
                                             "type": "object",
                                             "properties": {
                                                  "message": {
                                                       "type": "string"
                                                  }
                                             }
                                        }
                                   }
                              }
                         },
                         "400": {
                              "description": "Bad Request",
                              "content": {
                                   "application/json": {
                                        "schema": {
                                             "type": "object",
                                             "properties": {
                                                  "message": {
                                                       "type": "string"
                                                  }
                                             }
                                        }
                                   }
                              }
                         },
                         "409": {
                              "description": "Conflict",
                              "content": {
                                   "application/json": {
                                        "schema": {
                                             "type": "object",
                                             "properties": {
                                                  "message": {
                                                       "type": "string"
                                                  }
                                             }
                                        }
                                   }
                              }
                         },
                         "500": {
                              "description": "Internal Server Error",
                              "content": {
                                   "application/json": {
                                        "schema": {
                                             "type": "object",
                                             "properties": {
                                                  "message": {
                                                       "type": "string"
                                                  }
                                             }
                                        }
                                   }
                              }
                         }
                    }
               }
          },
          "/v1/api/login": {
               "post": {
                    "tags": [ "Users"],
                    "summary": "Login to get a JWT token",
                    "requestBody": {
                         "required": true,
                         "content": {
                              "application/json": {
                                   "schema": {
                                        "type": "object",
                                        "properties": {
                                             "email": {
                                                  "type": "string"
                                             },
                                             "password": {
                                                  "type": "string"
                                             }
                                        }
                                   }
                              }
                         }
                    },
                    "responses": {
                         "200": {
                              "description": "Successful login",
                              "content": {
                                   "application/json": {
                                        "schema": {
                                             "type": "object",
                                             "properties": {
                                                  "token": {
                                                       "type": "string"
                                                  }
                                             }
                                        }
                                   }
                              }
                         },
                         "401": {
                              "description": "Invalid username or password",
                              "content": {
                                   "application/json": {
                                        "schema": {
                                             "type": "object",
                                             "properties": {
                                                  "error": {
                                                       "type": "string"
                                                  }
                                             }
                                        }
                                   }
                              }
                         }
                    }
               }
          },"/v1/api/users": {
               "get": {
                  "tags": [
                       "Users"
                  ],
                  "summary": "Get all users",
                       "security": [
                            {
                                 "bearerAuth": []
                            }
                       ],
                  "responses": {
                       "200": {
                            "description": "List of users",
                            "content": {
                                 "application/json": {
                                      "schema": {
                                           "$ref": "#/components/schemas/User"
                                      }
                                 }
                            }
                       }
                  }
             },   
        },"/v1/api/users/{id}": {
          "get": {
               "tags": [
                    "Users"
               ],
               "summary": "Get a User by ID",
                   "security": [
                        {
                             "bearerAuth": []
                        }
                   ],
               "parameters": [
                    {
                         "name": "id",
                         "in": "path",
                         "description": "ID of the User to retrieve",
                         "required": true,
                         "schema": {
                              "type": "string"
                         }
                    }
               ],
               "responses": {
                    "200": {
                         "description": "User details",
                         "content": {
                              "application/json": {
                                   "schema": {
                                        "$ref": "#/components/schemas/User"
                                   }
                              }
                         }
                    },
                    "404": {
                         "description": "User not found"
                    }
               }
          },
          "put": {
               "tags": [
                    "Users"
               ],
               "summary": "Update a User by ID",
               "security": [
                    {
                         "bearerAuth": []
                    }
               ],
               "parameters": [
                    {
                         "name": "id",
                         "in": "path",
                         "description": "ID of the User to update",
                         "required": true,
                         "schema": {
                              "type": "string"
                         }
                    }
               ],
               "requestBody": {
                    "description": "User object that needs to be updated",
                    "required": true,
                    "content": {
                         "application/json": {
                              "schema": {
                                   "$ref": "#/components/schemas/UserInput"
                              }
                         }
                    }
               },
               "responses": {
                    "200": {
                         "description": "User updated successfully",
                         "content": {
                              "application/json": {
                                   "schema": {
                                        "$ref": "#/components/schemas/User"
                                   }
                              }
                         }
                    },
                    "404": {
                         "description": "User not found"
                    },
                    "500": {
                         "description": "Internal server error"
                    }
               }
          },
              "delete": {
                   "tags": [
                        "Users"
                   ],
                   "summary": "Delete a User by ID",
                   "security": [
                        {
                             "bearerAuth": []
                        }
                   ],
                   "parameters": [
                        {
                             "name": "id",
                             "in": "path",
                             "description": "ID of the User to delete",
                             "required": true,
                             "schema": {
                                  "type": "string"
                             }
                        }
                   ],
                   "responses": {
                        "200": {
                             "description": "User deleted successfully"
                        },
                        "404": {
                             "description": "User not found"
                        },
                        "500": {
                             "description": "Internal server error"
                        }
                   }
              } 
         
       },
          "/v1/api/scheduals": {
            "get": {
               "tags": [
                    "Scheduals"
               ],
               "summary": "Get all Scheduals",
                    "security": [
                         {
                              "bearerAuth": []
                         }
                    ],
               "responses": {
                    "200": {
                         "description": "List of Scheduals",
                         "content": {
                              "application/json": {
                                   "schema": {
                                        "$ref": "#/components/schemas/Schedual"
                                   }
                              }
                         }
                    }
               }
          },
          "post": {
               "tags": [
                    "Scheduals"
               ],
               "summary": "Add a new Schedual",
               "security": [
                    {
                         "bearerAuth": []
                    }
               ],
               "requestBody": {
                    "description": "Schedual object that needs to be added to the library",
                    "required": true,
                    "content": {
                         "application/json": {
                              "schema": {
                                   "$ref": "#/components/schemas/SchedualInput"
                              }
                         }
                    }
               },
               "responses": {
                    "200": {
                         "description": "Schedual added successfully",
                         "content": {
                              "application/json": {
                                   "schema": {
                                        "$ref": "#/components/schemas/Schedual"
                                   }
                              }
                         }
                    },
                    "500": {
                         "description": "Internal server error"
                    }
               }
          },
          
     },
    "/v1/api/scheduals/{id}": {
     "get": {
          "tags": [
               "Scheduals"
          ],
          "summary": "Get a Schedual by ID",
              "security": [
                   {
                        "bearerAuth": []
                   }
              ],
          "parameters": [
               {
                    "name": "id",
                    "in": "path",
                    "description": "ID of the Schedual to retrieve",
                    "required": true,
                    "schema": {
                         "type": "string"
                    }
               }
          ],
          "responses": {
               "200": {
                    "description": "Schedual details",
                    "content": {
                         "application/json": {
                              "schema": {
                                   "$ref": "#/components/schemas/Schedual"
                              }
                         }
                    }
               },
               "404": {
                    "description": "Schedual not found"
               }
          }
     },
     "put": {
          "tags": [
               "Scheduals"
          ],
          "summary": "Update a Schedual by ID",
          "security": [
               {
                    "bearerAuth": []
               }
          ],
          "parameters": [
               {
                    "name": "id",
                    "in": "path",
                    "description": "ID of the Schedual to update",
                    "required": true,
                    "schema": {
                         "type": "string"
                    }
               }
          ],
          "requestBody": {
               "description": "Schedual object that needs to be updated",
               "required": true,
               "content": {
                    "application/json": {
                         "schema": {
                              "$ref": "#/components/schemas/SchedualInput"
                         }
                    }
               }
          },
          "responses": {
               "200": {
                    "description": "Schedual updated successfully",
                    "content": {
                         "application/json": {
                              "schema": {
                                   "$ref": "#/components/schemas/Schedual"
                              }
                         }
                    }
               },
               "404": {
                    "description": "Schedual not found"
               },
               "500": {
                    "description": "Internal server error"
               }
          }
     },
         "delete": {
              "tags": [
                   "Scheduals"
              ],
              "summary": "Delete a Schedual by ID",
              "security": [
                   {
                        "bearerAuth": []
                   }
              ],
              "parameters": [
                   {
                        "name": "id",
                        "in": "path",
                        "description": "ID of the Schedual to delete",
                        "required": true,
                        "schema": {
                             "type": "string"
                        }
                   }
              ],
              "responses": {
                   "200": {
                        "description": "Schedual deleted successfully"
                   },
                   "404": {
                        "description": "Schedual not found"
                   },
                   "500": {
                        "description": "Internal server error"
                   }
              }
         } 
    
  }
},
     "components": {
          "securitySchemes": {
               "bearerAuth": {
                    "type": "http",
                    "scheme": "bearer",
                    "bearerFormat": "JWT"
               }
          },
          "schemas": {
               "Schedual": {
                    "type": "object",
                    "properties": {
                         "_id": {
                              "type": "string",
                              "example": "60ecb6aaeae6e045bb6f9e6c"
                         },
                         "title": {
                              "type": "string",
                              "example": "Going For Holidays"
                         },
                        "time": {
                              "type": "string",
                              "example": "5:30 AM Wednesday"
                         },
                         "description": {
                              "type": "string",
                              "example": "A Schedual to help me to prepare my vaccation"
                         }
                    }
               },
               "User": {
                    "type": "object",
                    "properties": {
                         "_id": {
                              "type": "string",
                              "example": "60ecb6aaeae6e045bb6f9e6c"
                         },
                         "name": {
                              "type": "string",
                              "example": "John Doe"
                         },
                         "email": {
                              "type": "string",
                              "example": "johndoe@example.com"
                         },
                         "password": {
                              "type": "string",
                              "example": "password123"
                         }
                    }
               },
               "SchedualInput": {
                    "type": "object",
                    "properties": {
                       "title": {
                              "type": "string",
                              "example": "Going For Holidays"
                         },
                         "time": {
                              "type": "string",
                              "example": "5:30 AM Wednesday"
                         },
                         "description": {
                              "type": "string",
                              "example": "A Schedual to help me to prepare my vaccation"
                         }  
                    }
               },
               "UserInput": {
                    "type": "object",
                    "properties": {
                         "name": {
                              "type": "string",
                              "example": "John Doe"
                         },
                         "email": {
                              "type": "string",
                              "example": "johndoe@example.com"
                         },
                         "password": {
                              "type": "string",
                              "example": "password123"
                         }
                    }
               }
          }
     }
}

module.exports =annotation