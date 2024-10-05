let menu_state=0;

document.querySelector('.more').addEventListener('click',()=>{
    if(menu_state===0){

        document.querySelector('#side-menu').style.left='0';
        menu_state=1;
        console.log("open");
        return;
    }
})

document.querySelector('#close-btn').addEventListener('click',()=>{
    if(menu_state===1){
        document.querySelector('#side-menu').style.left='-100%';
        menu_state=0;
        console.log("close");
    }
})





// this is for the Comment

document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.querySelector('.comment-form-container form');
    const commentsContainer = document.querySelector('.comments-container');

    // TO Load comments from localStorage
    function loadComments() {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.forEach(comment => appendComment(comment));
    }

    // Function to append a new comment to the comments container
    function appendComment(comment) {
        const newComment = document.createElement('div');
        newComment.classList.add('comment');

        //  avatar div
        const avatarDiv = document.createElement('div');
        avatarDiv.classList.add('comment-avatar');
        const avatarImg = document.createElement('img');
        avatarImg.src = 'review_photos/user_17878913.png'; 
        avatarImg.alt = comment.name;
        avatarDiv.appendChild(avatarImg);

        // Create the content div
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('comment-content');
        const nameHeader = document.createElement('h4');
        nameHeader.textContent = comment.name; 
        const dateParagraph = document.createElement('p');
        dateParagraph.textContent = new Date().toLocaleDateString(); 
        const commentParagraph = document.createElement('p');
        commentParagraph.textContent = comment.text; 

        // Append elements to content div
        contentDiv.appendChild(nameHeader);
        contentDiv.appendChild(dateParagraph);
        contentDiv.appendChild(commentParagraph);

        // Create reply link
        const replyLink = document.createElement('a');
        replyLink.href = '#';
        replyLink.classList.add('reply');
        replyLink.textContent = 'Reply';
        contentDiv.appendChild(replyLink);

        // DOE Appending avatar and content to new comment
        newComment.appendChild(avatarDiv);
        newComment.appendChild(contentDiv);

        // FOR Appending new comment to comments container
        commentsContainer.appendChild(newComment);
    }

    // Handle form submission
    commentForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        // GETTING VALUES:
        const fullName = document.getElementById('full-name').value;
        const commentText = document.getElementById('comments').value;

        // Creating a comment object
        const comment = {
            name: fullName,
            text: commentText
        };

        // Save the comment to localStorage
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));

        // Append the new comment to the comments container
        appendComment(comment);

        // Clear the form
        commentForm.reset();
    });

    // Load comments when the page is loaded
    loadComments();
});
