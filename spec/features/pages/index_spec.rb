require 'rails_helper'

RSpec.describe 'Home page features', type: :system do
  before do
    driven_by(:selenium_chrome_headless)
  end
  describe 'As a Visitor' do
    it 'has an email contact form' do
      visit root_path

      within ".container" do
        expect(page).to have_content("Name")
        expect(page).to have_field("name")
        expect(page).to have_content("Email")
        expect(page).to have_field("email")
        expect(page).to have_content("Message")
        expect(page).to have_field("message")
        expect(page).to have_button('Submit')
      end
    end

    it 'should validate presence of name' do
      visit root_path

      fill_in 'message', with: "Hello World!"
      fill_in 'email', with: "jim@johnson.org"

      click_on "Submit"
      
      expect(current_path).to eq(root_path)
      expect(page).to have_content("Name cannot be left blank.")
    end

    it 'should validate presence of email' do
      visit root_path

      fill_in 'name', with: "Jim Johnson"
      fill_in 'message', with: "Hello World!"

      click_on "Submit"
      expect(current_path).to eq(root_path)
      expect(page).to have_content("Email cannot be left blank.")
    end

    it 'should validate presence of message' do
      visit root_path

      fill_in 'name', with: "Jim Johnson"
      fill_in 'email', with: "jim@jordan.org"

      click_on "Submit"
      expect(current_path).to eq(root_path)
      expect(page).to have_content("Message cannot be left blank.")
    end

    it 'should return a thank you if all fields are correct' do
      visit root_path

      fill_in 'name', with: "Jim Johnson"
      fill_in 'email', with: "jim@jordan.org"
      fill_in 'message', with: "Hello World!"

      click_on "Submit"
      expect(current_path).to eq(root_path)
      expect(page).to have_content("Thank you for contacting us!")
    end
  end
end

