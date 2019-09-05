package fan.tozzi.api;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Language {
	
	@JsonProperty("Name")
	private String name;
	@JsonProperty("Year")
	private Integer year;
	@JsonProperty("Notes")
	private String notes;
	
	/**
	 * @return the name
	 */
	public final String getName() {
		return name;
	}
	/**
	 * @param name the name to set
	 */
	public final void setName(String name) {
		this.name = name;
	}
	/**
	 * @return the year
	 */
	public final Integer getYear() {
		return year;
	}
	/**
	 * @param year the year to set
	 */
	public final void setYear(Integer year) {
		this.year = year;
	}
	/**
	 * @return the notes
	 */
	public final String getNotes() {
		return notes;
	}
	/**
	 * @param notes the notes to set
	 */
	public final void setNotes(String notes) {
		this.notes = notes;
	}
	

}
