import { marked } from 'marked';
    
    const fileInput = document.getElementById('file-input');
    const textInput = document.getElementById('text-input');
    const previewBtn = document.getElementById('preview-btn');
    const resetBtn = document.getElementById('reset-btn');
    const content = document.getElementById('content');
    
    // Load last content from localStorage
    const lastContent = localStorage.getItem('presentationContent');
    if (lastContent) {
      textInput.value = lastContent;
      renderContent(lastContent);
    }
    
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        textInput.value = event.target.result;
        renderContent(event.target.result);
      };
      reader.readAsText(file);
    });
    
    previewBtn.addEventListener('click', () => {
      const content = textInput.value;
      localStorage.setItem('presentationContent', content);
      renderContent(content);
    });
    
    resetBtn.addEventListener('click', () => {
      textInput.value = '';
      content.innerHTML = '';
      localStorage.removeItem('presentationContent');
    });
    
    function renderContent(markdown) {
      content.innerHTML = marked.parse(markdown);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      const sections = content.querySelectorAll('h1, h2');
      const current = document.activeElement;
      
      if (e.key === 'ArrowDown') {
        // Navigate to next section
      }
      if (e.key === 'ArrowUp') {
        // Navigate to previous section
      }
    });
