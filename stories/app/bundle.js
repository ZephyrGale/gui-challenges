const stories = document.querySelector('.stories');
let median = stories.offsetLeft + stories.clientWidth / 2;

const navigateStories = (story, direction) => {
  const lastItemInUserStory = story.parentNode.firstElementChild;
  const firstItemInUserStory = story.parentNode.lastElementChild;
  const hasNextUserStory = story.parentElement.nextElementSibling;
  const hasPrevUserStory = story.parentElement.previousElementSibling;

  if (direction === 'next') {
    if (lastItemInUserStory === story && !hasNextUserStory) return;else if (lastItemInUserStory === story && hasNextUserStory) story.parentElement.nextElementSibling.scrollIntoView({
      behavior: 'smooth'
    });else story.classList.add('seen');
  } else if (direction === 'prev') {
    if (firstItemInUserStory === story && !hasPrevUserStory) return;else if (firstItemInUserStory === story && hasPrevUserStory) story.parentElement.previousElementSibling.scrollIntoView({
      behavior: 'smooth'
    });else story.nextElementSibling.classList.remove('seen');
  }
};

stories.addEventListener('click', e => {
  if (e.target.nodeName !== 'ARTICLE') return;
  navigateStories(e.target, e.clientX > median ? 'next' : 'prev');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJqcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdG9yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0b3JpZXMnKVxubGV0IG1lZGlhbiA9IHN0b3JpZXMub2Zmc2V0TGVmdCArIChzdG9yaWVzLmNsaWVudFdpZHRoIC8gMilcblxuY29uc3QgbmF2aWdhdGVTdG9yaWVzID0gKHN0b3J5LCBkaXJlY3Rpb24pID0+IHtcbiAgY29uc3QgbGFzdEl0ZW1JblVzZXJTdG9yeSA9IHN0b3J5LnBhcmVudE5vZGUuZmlyc3RFbGVtZW50Q2hpbGRcbiAgY29uc3QgZmlyc3RJdGVtSW5Vc2VyU3RvcnkgPSBzdG9yeS5wYXJlbnROb2RlLmxhc3RFbGVtZW50Q2hpbGRcbiAgY29uc3QgaGFzTmV4dFVzZXJTdG9yeSA9IHN0b3J5LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nXG4gIGNvbnN0IGhhc1ByZXZVc2VyU3RvcnkgPSBzdG9yeS5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmdcbiAgXG4gIGlmIChkaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgIGlmIChsYXN0SXRlbUluVXNlclN0b3J5ID09PSBzdG9yeSAmJiAhaGFzTmV4dFVzZXJTdG9yeSlcbiAgICAgIHJldHVyblxuICAgIGVsc2UgaWYgKGxhc3RJdGVtSW5Vc2VyU3RvcnkgPT09IHN0b3J5ICYmIGhhc05leHRVc2VyU3RvcnkpXG4gICAgICBzdG9yeS5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgfSlcbiAgICBlbHNlXG4gICAgICBzdG9yeS5jbGFzc0xpc3QuYWRkKCdzZWVuJylcbiAgfVxuICBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgaWYgKGZpcnN0SXRlbUluVXNlclN0b3J5ID09PSBzdG9yeSAmJiAhaGFzUHJldlVzZXJTdG9yeSlcbiAgICAgIHJldHVyblxuICAgIGVsc2UgaWYgKGZpcnN0SXRlbUluVXNlclN0b3J5ID09PSBzdG9yeSAmJiBoYXNQcmV2VXNlclN0b3J5KVxuICAgICAgc3RvcnkucGFyZW50RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KVxuICAgIGVsc2VcbiAgICAgIHN0b3J5Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdzZWVuJylcbiAgfVxufVxuXG5zdG9yaWVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gIGlmIChlLnRhcmdldC5ub2RlTmFtZSAhPT0gJ0FSVElDTEUnKSBcbiAgICByZXR1cm5cbiAgXG4gIG5hdmlnYXRlU3RvcmllcyhlLnRhcmdldCwgXG4gICAgZS5jbGllbnRYID4gbWVkaWFuIFxuICAgICAgPyAnbmV4dCcgXG4gICAgICA6ICdwcmV2Jylcbn0pIl0sIm5hbWVzIjpbInN0b3JpZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZWRpYW4iLCJvZmZzZXRMZWZ0IiwiY2xpZW50V2lkdGgiLCJuYXZpZ2F0ZVN0b3JpZXMiLCJzdG9yeSIsImRpcmVjdGlvbiIsImxhc3RJdGVtSW5Vc2VyU3RvcnkiLCJwYXJlbnROb2RlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJmaXJzdEl0ZW1JblVzZXJTdG9yeSIsImxhc3RFbGVtZW50Q2hpbGQiLCJoYXNOZXh0VXNlclN0b3J5IiwicGFyZW50RWxlbWVudCIsIm5leHRFbGVtZW50U2libGluZyIsImhhc1ByZXZVc2VyU3RvcnkiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0Iiwibm9kZU5hbWUiLCJjbGllbnRYIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFoQjtBQUNBLElBQUlDLE1BQU0sR0FBR0gsT0FBTyxDQUFDSSxVQUFSLEdBQXNCSixPQUFPLENBQUNLLFdBQVIsR0FBc0IsQ0FBekQ7O0FBRUEsTUFBTUMsZUFBZSxHQUFHLENBQUNDLEtBQUQsRUFBUUMsU0FBUixLQUFzQjtBQUM1QyxRQUFNQyxtQkFBbUIsR0FBR0YsS0FBSyxDQUFDRyxVQUFOLENBQWlCQyxpQkFBN0M7QUFDQSxRQUFNQyxvQkFBb0IsR0FBR0wsS0FBSyxDQUFDRyxVQUFOLENBQWlCRyxnQkFBOUM7QUFDQSxRQUFNQyxnQkFBZ0IsR0FBR1AsS0FBSyxDQUFDUSxhQUFOLENBQW9CQyxrQkFBN0M7QUFDQSxRQUFNQyxnQkFBZ0IsR0FBR1YsS0FBSyxDQUFDUSxhQUFOLENBQW9CRyxzQkFBN0M7O0FBRUEsTUFBSVYsU0FBUyxLQUFLLE1BQWxCLEVBQTBCO0FBQ3hCLFFBQUlDLG1CQUFtQixLQUFLRixLQUF4QixJQUFpQyxDQUFDTyxnQkFBdEMsRUFDRSxPQURGLEtBRUssSUFBSUwsbUJBQW1CLEtBQUtGLEtBQXhCLElBQWlDTyxnQkFBckMsRUFDSFAsS0FBSyxDQUFDUSxhQUFOLENBQW9CQyxrQkFBcEIsQ0FBdUNHLGNBQXZDLENBQXNEO0FBQ3BEQyxNQUFBQSxRQUFRLEVBQUU7QUFEMEMsS0FBdEQsRUFERyxLQUtIYixLQUFLLENBQUNjLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLE1BQXBCO0FBQ0gsR0FURCxNQVVLLElBQUdkLFNBQVMsS0FBSyxNQUFqQixFQUF5QjtBQUM1QixRQUFJSSxvQkFBb0IsS0FBS0wsS0FBekIsSUFBa0MsQ0FBQ1UsZ0JBQXZDLEVBQ0UsT0FERixLQUVLLElBQUlMLG9CQUFvQixLQUFLTCxLQUF6QixJQUFrQ1UsZ0JBQXRDLEVBQ0hWLEtBQUssQ0FBQ1EsYUFBTixDQUFvQkcsc0JBQXBCLENBQTJDQyxjQUEzQyxDQUEwRDtBQUN4REMsTUFBQUEsUUFBUSxFQUFFO0FBRDhDLEtBQTFELEVBREcsS0FLSGIsS0FBSyxDQUFDUyxrQkFBTixDQUF5QkssU0FBekIsQ0FBbUNFLE1BQW5DLENBQTBDLE1BQTFDO0FBQ0g7QUFDRixDQTFCRDs7QUE0QkF2QixPQUFPLENBQUN3QixnQkFBUixDQUF5QixPQUF6QixFQUFrQ0MsQ0FBQyxJQUFJO0FBQ3JDLE1BQUlBLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxRQUFULEtBQXNCLFNBQTFCLEVBQ0U7QUFFRnJCLEVBQUFBLGVBQWUsQ0FBQ21CLENBQUMsQ0FBQ0MsTUFBSCxFQUNiRCxDQUFDLENBQUNHLE9BQUYsR0FBWXpCLE1BQVosR0FDSSxNQURKLEdBRUksTUFIUyxDQUFmO0FBSUQsQ0FSRCJ9