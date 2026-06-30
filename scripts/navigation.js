console.log("navigation loaded");0
const navigation = 
`<nav>
          <h2><a href="/pages/home.html">The Play Pen</a></h2>
          <ul class="no-dots">
            <li class="list-marg"><a href="/pages/about.html">About</a></li>
            <li class="list-marg"><a href="/pages/interests.html">Interests</a></li>
            <li class="list-marg"><a href="/pages/link.html">Links</a></li>
            <li class="list-marg"><a href="https://cryptidsmile.atabook.org/">Guestbook</a></li>
          </ul>
        </nav>`;

const navPlaceholder = document.querySelector("#navigation-placeholder");

navPlaceholder.innerHTML = navigation;



// 1. home page의 Navigation placeholder를 class가 아닌 id로 변경
// 2. 위의 nav 태그를 변수에 저장

// 3. querySelector를 이용하여 placeholder를 선택
// 4. innerHTML을 이용하여 nav 태그를 placeholder 자리에 삽입