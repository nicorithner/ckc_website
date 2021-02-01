require 'rails_helper'

RSpec.describe 'Home page features' do
  describe 'As a Visitor' do
    it 'Root is is pages/index' do
      visit root_path

      expect(page).to have_content("Colorado Kettlebell Club")
      expect(page).to have_content("Contact Us")
    end
  end
end

