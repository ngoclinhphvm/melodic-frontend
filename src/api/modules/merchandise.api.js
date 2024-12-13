import Client from "../client.api";

const Merchandise = {
  async getMerchandiseById(id) {
    try {
      const response = await Client.get(`/merchandise/${id}`);
      return response;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },
  async getAllMerchandise() {
    try {
      const response = await Client.get("/merchandise/all");
      return response;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },
  async getAllMerchandiseByArtistId(id, sort) {
    try {
      const response = await Client.get(`/artist/${id}/merchandise`, {
        params: { sort },
      });
      return response;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async createMerchandise(merchandise, accessToken) {
    try {
      const response = await Client.post("/merchandise", merchandise, {
        headers: {
          token: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async updateMerchandise(id, merchandise, accessToken) {
    console.log("Updating merchandise with ID:", id); // Log the ID here

    try {
      const response = await Client.put(
        `/merchandise/${id}`,
        merchandise,
        {
          headers: {
            token: `Bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },

  async deleteMerchandise(id, accessToken) {
    try {
      const response = await Client.delete(`/merchandise/${id}`, {
        headers: {
          token: `Bearer ${accessToken}`,
        },
      });
      return response;
    } catch (error) {
      if (error.response) {
        return error.response;
      }
    }
  },
};

export default Merchandise;
