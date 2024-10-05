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

    function loadComments() {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.forEach(comment => appendComment(comment));
    }

    function appendComment(comment) {
        const newComment = document.createElement('div');
        newComment.classList.add('comment');

        const avatarDiv = document.createElement('div');
        avatarDiv.classList.add('comment-avatar');
        const avatarImg = document.createElement('img');
        avatarImg.src = 'review_photos/user_17878913.png'; 
        avatarImg.alt = comment.name;
        avatarDiv.appendChild(avatarImg);

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('comment-content');
        const nameHeader = document.createElement('h4');
        nameHeader.textContent = comment.name; 
        const dateParagraph = document.createElement('p');
        dateParagraph.textContent = new Date().toLocaleDateString(); 
        const commentParagraph = document.createElement('p');
        commentParagraph.textContent = comment.text; 

        contentDiv.appendChild(nameHeader);
        contentDiv.appendChild(dateParagraph);
        contentDiv.appendChild(commentParagraph);

        const replyLink = document.createElement('a');
        replyLink.href = '#';
        replyLink.classList.add('reply');
        replyLink.textContent = 'Reply';
        contentDiv.appendChild(replyLink);

        newComment.appendChild(avatarDiv);
        newComment.appendChild(contentDiv);

        commentsContainer.appendChild(newComment);
    }

    commentForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const fullName = document.getElementById('full-name').value;
        const commentText = document.getElementById('comments').value;

        const comment = {
            name: fullName,
            text: commentText
        };

        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));

        appendComment(comment);

        commentForm.reset();
    });

    loadComments();
});
