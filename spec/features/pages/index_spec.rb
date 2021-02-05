require 'rails_helper'

RSpec.describe 'Home page features', type: :system do
  before do
    driven_by(:selenium_chrome_headless)
  end
  describe 'As a Visitor' do
    it 'Root is is pages/index' do
      visit root_path

      expect(page).to have_content("Colorado Kettlebell Club")
      expect(page).to have_content("Contact Us")
    end

    it 'has an email contact form' do
      visit root_path

      expect(page).to have_content("Name")
      expect(page).to have_field("name")
      expect(page).to have_content("Email")
      expect(page).to have_field("email")
      expect(page).to have_content("Message")
      expect(page).to have_field("message")
      expect(page).to have_button('Submit')
    end
  end
end

