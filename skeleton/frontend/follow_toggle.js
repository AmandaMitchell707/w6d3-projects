const APIUtil = require('./api_util.js');

class FollowToggle {

  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id'); 
    this.followState = this.$el.data('initial-follow-state'); 
    this.render();
    this.$el.on('click', this.handleClick.bind(this));
  }
  
  render() {
    if(this.followState === 'unfollowed') {
      this.$el.text('Follow!');
    } else {
      this.$el.text('Unfollow!');
    }
  }
  toggleFollowState() {
    if(this.followState === 'unfollowing') {
      this.followState = 'unfollowed';
    } else {
      this.followState = 'followed';
    }
  }
  
  
  handleClick(e) {
      console.log('click');
      e.preventDefault();
      
      if (this.followState === 'followed') {
        this.followState = 'unfollowing';
        this.$el.prop("disabled", true);

        APIUtil.unfollowUser(this.userId)
        .then((whateverTheServerRenders) => {
          this.$el.prop("disabled", false);
          this.toggleFollowState();
          this.render(); 
        },
          (err) => console.log('error'));
      
      } else {
        this.followState = 'following';
        this.$el.prop("disabled", true);

        APIUtil.followUser(this.userId)
        .then((whateverTheServerRenders) => {
          this.$el.prop("disabled", false);
          this.toggleFollowState();
          this.render(); 
        },
          (err) => console.log('error'));
      }
    
    //   $.ajax({
    //     method: `${whichMethod}`,
    //     url: `/users/${this.userId}/follow`,
    //     dataType: "JSON",
    //   }).then((whateverTheServerRenders) => {
    //     this.toggleFollowState();
    //     this.render();},
    //     (err) => console.log('error'));
  }
}

module.exports = FollowToggle;