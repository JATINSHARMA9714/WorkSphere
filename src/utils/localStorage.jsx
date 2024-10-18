
const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Complete project report",
                "description": "Prepare and submit the final project report.",
                "date": "2024-10-18",
                "category": "Documentation",
                "active": true,
                "newtask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Team meeting",
                "description": "Attend the weekly team meeting.",
                "date": "2024-10-19",
                "category": "Meeting",
                "active": true,
                "newtask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Fix website bugs",
                "description": "Resolve bugs found in the user interface.",
                "date": "2024-10-18",
                "category": "Development",
                "active": true,
                "newtask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Update documentation",
                "description": "Add new features to the product documentation.",
                "date": "2024-10-20",
                "category": "Documentation",
                "active": true,
                "newtask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Review code",
                "description": "Conduct a code review session for the new project.",
                "date": "2024-10-22",
                "category": "Development",
                "active": true,
                "newtask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Client presentation",
                "description": "Prepare slides for the client meeting.",
                "date": "2024-10-25",
                "category": "Presentation",
                "active": true,
                "newtask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Finalize design",
                "description": "Complete the design for the new product feature.",
                "date": "2024-10-18",
                "category": "Design",
                "active": true,
                "newtask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Testing new feature",
                "description": "Test the recently developed feature.",
                "date": "2024-10-21",
                "category": "Testing",
                "active": true,
                "newtask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Prepare quarterly report",
                "description": "Compile data for the quarterly financial report.",
                "date": "2024-10-28",
                "category": "Finance",
                "active": true,
                "newtask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Fix server issues",
                "description": "Resolve ongoing issues with the production server.",
                "date": "2024-10-19",
                "category": "IT",
                "active": true,
                "newtask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "title": "Onboard new employees",
                "description": "Assist in onboarding new team members.",
                "date": "2024-10-21",
                "category": "HR",
                "active": true,
                "newtask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Prepare training materials",
                "description": "Create materials for the upcoming training session.",
                "date": "2024-10-23",
                "category": "HR",
                "active": true,
                "newtask": true,
                "completed": false,
                "failed": false
            }
        ]
    }
];



        const admin = [
        {
          "id": 1,
          "email": "admin@example.com",
          "password": "123"
        }
    ]
      


    export const setLocalStorage = () =>{
        localStorage.setItem('employees',JSON.stringify(employees))
        localStorage.setItem('admin',JSON.stringify(admin))
    }

    export const getLocalStorage = () =>{
       const employeeData = JSON.parse(localStorage.getItem('employees'))

       const adminData = JSON.parse(localStorage.getItem('admin'));

       console.log(employeeData);
       console.log(adminData);
       
       
       
    }
  