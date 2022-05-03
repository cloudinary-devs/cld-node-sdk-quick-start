// Require the cloudinary library
var cloudinary = require('cloudinary').v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true
});

// Log the configuration
console.log(cloudinary.config());

/////////////////////////
// Uploads an image file
/////////////////////////
function uploadImage(callback)
{
    // Upload an image
    cloudinary.uploader.upload("https://cloudinary-devs.github.io/cld-docs-assets/assets/images/happy_people.jpg", 
        { 
            // Use the uploaded file's name as the asset's public ID and allow overwriting the asset with new versions.
            use_filename: true,
            unique_filename: false,
            overwrite: true
        },
        function(error, result) 
        {
            console.log(result, error);
            callback(result.public_id); 
        }
    );
}

/////////////////////////////////////
// Gets details of an uploaded image
/////////////////////////////////////
function getAssetInfo(publicId, callback)
{
    // Get details of the uploaded image
    cloudinary.api.resource(publicId, 
        { 
            colors: true 
        },
        function(error, result) 
        {
            console.log(result, error); 
            callback(result);
        }
    );
}

//////////////////////////////////////////////////////////////
// Creates an HTML image tag with a transformation that
// results in a circular thumbnail crop of the image  
// focused on the faces, applying an outline of the  
// first color, and setting a background of the second color.
//////////////////////////////////////////////////////////////
function createImageTag(publicId, color1, color2)
{
    // Create an image tag with transformations applied to the src URL.
    let imageTag = cloudinary.image(publicId, 
        {
            transformation: [
                { width: 250, height: 250, gravity: "faces", crop: "thumb" },
                { radius: "max" },
                { effect: "outline:10", color: color1 },
                { background: color2 }
            ]
        }
    );
    
    // Log the image tag to the console
    console.log(imageTag);
}

// Upload an image
uploadImage(function(publicId) {
    // Get information about the image
    getAssetInfo(publicId, function(result){
        // Create an image tag, using two of the colors in a transformation
        createImageTag(publicId, result.colors[0][0], result.colors[1][0]);
    });
});