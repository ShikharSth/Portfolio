 console.log("JavaScript file loaded!");


        document.getElementById('downloadBtn').addEventListener('click', function() {
            // Trigger file download
            const link = document.createElement('a');
            link.href = '../file/SHIKHAR_SHRESTHA.docx'; // Path to the file
            link.download = 'Shikhar cv.docx'; // Filename for the download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); // Clean up the created link
        });
