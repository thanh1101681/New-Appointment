var revalidator = require('revalidator');
var schemaValidator = function(schema) {
    return function(value) {
        var results = revalidator.validate(value, schema);
        if (!results.valid) throw new Error(JSON.stringify(results.errors));
    };
};
module.exports = function() {
    return schemaValidator({
        type: 'object',
        properties: {
            PatientAppointment: {
                type: 'object',
                required: true,
                properties: {
                    UID: {
                        type: 'string',
                        required: true,
                        pattern: HelperService.regexPattern.uid,
                        maxLength: 255,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    Title: {
                        type: 'string',
                        required: false,
                        maxLength: 45,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    MaritalStatus: {
                        type: 'string',
                        required: false,
                        maxLength: 100,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    FirstName: {
                        type: 'string',
                        required: false,
                        maxLength: 50,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    MiddleName: {
                        type: 'string',
                        required: false,
                        maxLength: 100,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    LastName: {
                        type: 'string',
                        required: false,
                        maxLength: 255,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    PreferredName: {
                        type: 'string',
                        required: false,
                        maxLength: 255,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    PreviousName: {
                        type: 'string',
                        required: false,
                        maxLength: 255,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    Email1: {
                        type: 'string',
                        required: false,
                        format: 'email',
                        maxLength: 255,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    Email2: {
                        type: 'string',
                        required: false,
                        format: 'email',
                        maxLength: 255,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    PhoneNumber: {
                        type: 'string',
                        required: false,
                        pattern: HelperService.regexPattern.auPhoneNumber,
                        maxLength: 20,
                        messages: {
                            maxLength: 'Too long!',
                            pattern: 'PhoneNumber invalid!'
                        }
                    },
                    Suburb: {
                        type: 'string',
                        required: false,
                        maxLength: 100,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    PostCode: {
                        type: 'string',
                        required: false,
                        maxLength: 10,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    State: {
                        type: 'string',
                        required: false,
                        maxLength: 100
                    },
                    Country: {
                        type: 'string',
                        required: false,
                        maxLength: 255,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    CountryOfBirth: {
                        type: 'string',
                        required: false,
                        maxLength: 255,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    DOB: {
                        type: 'string',
                        required: false,
                        pattern: HelperService.regexPattern.DOB,
                        messages: {
                            maxLength: 'Too long!',
                            pattern: 'Fortmat DOB DD/MM/YYYY!'
                        }
                    },
                    Gender: {
                        type: 'string',
                        required: false,
                        maxLength: 255,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    Indigenous: {
                        type: 'string',
                        required: false,
                        maxLength: 100,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    Address1: {
                        type: 'string',
                        required: false,
                        maxLength: 255,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    Address2: {
                        type: 'string',
                        required: false,
                        maxLength: 255,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    HomePhoneNumber: {
                        type: 'string',
                        required: false,
                        pattern: HelperService.regexPattern.auHomePhoneNumber,
                        maxLength: 255,
                        messages: {
                            maxLength: 'Too long!',
                            pattern: 'HomePhoneNumber invalid!'
                        }
                    },
                    WorkPhoneNumer: {
                        type: 'string',
                        required: false,
                        pattern: HelperService.regexPattern.auHomePhoneNumber,
                        maxLength: 255,
                        messages: {
                            maxLength: 'Too long!',
                            pattern: 'WorkPhoneNumer invalid!'
                        }
                    },
                    FaxNumber: {
                        type: 'string',
                        required: false,
                        maxLength: 20,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    InterPreterRequired: {
                        type: 'string',
                        required: false,
                        maxLength: 1,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    InterPreterLanguage: {
                        type: 'string',
                        required: false,
                        maxLength: 100,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    OtherSpecialNeed: {
                        type: 'string',
                        required: false,
                        maxLength: 255,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    MedicareEligible: {
                        type: 'string',
                        required: false,
                        maxLength: 1,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    MedicareNumber: {
                        type: 'string',
                        required: false,
                        maxLength: 45,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    MedicareReferenceNumber: {
                        type: 'string',
                        required: false,
                        maxLength: 45,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    MedicareExpiryDate: {
                        type: 'string',
                        required: false,
                        pattern: HelperService.regexPattern.dateISO,
                    },
                    DVANumber: {
                        type: 'string',
                        required: false,
                        maxLength: 45,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    PatientKinFirstName: {
                        type: 'string',
                        required: false,
                        maxLength: 45,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    PatientKinMiddleName: {
                        type: 'string',
                        required: false,
                        maxLength: 100
                    },
                    PatientKinLastName: {
                        type: 'string',
                        required: false,
                        maxLength: 45,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    PatientKinRelationship: {
                        type: 'string',
                        required: false,
                        maxLength: 255,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    PatientKinMobilePhoneNumber: {
                        type: 'string',
                        required: false,
                        pattern: HelperService.regexPattern.auPhoneNumber,
                        maxLength: 20,
                        messages: {
                            maxLength: 'Too long!',
                            pattern: 'PatientKinMobilePhoneNumber invalid!'
                        }
                    },
                    PatientKinHomePhoneNumber: {
                        type: 'string',
                        required: false,
                        pattern: HelperService.regexPattern.auHomePhoneNumber,
                        messages: {
                            maxLength: 'Too long!',
                            pattern: 'PatientKinHomePhoneNumber invalid!'
                        }
                    },
                    PatientKinWorkPhoneNumber: {
                        type: 'string',
                        required: false,
                        pattern: HelperService.regexPattern.auHomePhoneNumber,
                        messages: {
                            maxLength: 'Too long!',
                            pattern: 'PatientKinWorkPhoneNumber invalid!'
                        }
                    },
                    CreatedDate: {
                        type: 'string',
                        required: true
                    },
                    CreatedBy: {
                        type: 'number',
                        required: true,
                        maxLength: 20,
                        messages: {
                            maxLength: 'Too big!'
                        }
                    },
                    ModifiedDate: {
                        type: 'string',
                        required: false
                    },
                    ModifiedBy: {
                        type: 'number',
                        required: false,
                        maxLength: 20,
                        messages: {
                            maxLength: 'Too big!'
                        }
                    }
                }
            },
            AppointmentData: {
                type: 'array',
                required: false,
                properties: {
                    UID: {
                        type: 'string',
                        required: true,
                        pattern: HelperService.regexPattern.uid,
                        maxLength: 255,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    Section: {
                        type: 'string',
                        required: true,
                        maxLength: 255,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    Category: {
                        type: 'string',
                        required: true,
                        maxLength: 255,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    Type: {
                        type: 'string',
                        required: true,
                        maxLength: 255,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    Name: {
                        type: 'string',
                        required: true,
                        maxLength: 255,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    Value: {
                        type: 'string',
                        required: false,
                        messages: {
                            maxLength: 'Too long!'
                        }
                    },
                    FileUpload: {
                        UID: {
                            type: 'string',
                            required: true,
                            pattern: HelperService.regexPattern.uid,
                            maxLength: 255,
                            messages: {
                                maxLength: 'Too long!'
                            }
                        }
                    },
                    Note: {
                        type: 'string',
                        required: false
                    },
                    Description: {
                        type: 'string',
                        required: false
                    },
                    CreatedDate: {
                        type: 'string',
                        required: true
                    },
                    CreatedBy: {
                        type: 'number',
                        required: true,
                        maxLength: 20,
                        messages: {
                            maxLength: 'Too big!'
                        }
                    },
                    ModifiedDate: {
                        type: 'string',
                        required: false
                    },
                    ModifiedBy: {
                        type: 'number',
                        required: false,
                        maxLength: 20,
                        messages: {
                            maxLength: 'Too big!'
                        }
                    }
                }
            },
            EForm: {
                type: 'array',
                required: false,
                properties: {
                    type: 'object',
                    required: false,
                    properties: {
                        UID: {
                            type: 'string',
                            required: true,
                            pattern: HelperService.regexPattern.uid,
                            maxLength: 255,
                            messages: {
                                maxLength: 'Too long!'
                            }
                        }
                    }
                }
            }
        }
    });
}
